import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { FC, PropsWithChildren, ReactElement, ReactNode } from "react";
import { cn } from "../../utils/tailwindCn";


export interface MainLayoutProps extends PropsWithChildren {
  logo?: string
  navItems?: ReactElement | ReactNode
  bottomNavItems?: ReactElement | ReactNode
  headerLinks?: ReactNode
  disabled?: boolean
}

const MainLayout: FC<MainLayoutProps> = ({
  navItems,
  children,
  bottomNavItems,
  disabled, }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] =
    useDisclosure();


  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      styles={{
        main: { display: 'flex', 'justifyContent': 'center' }
      }}
      disabled={disabled}
      header={{ height: 60, collapsed: !pinned }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },

      }}
      padding="sm"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
        </Group>

      </AppShell.Header>
      <AppShell.Navbar p="sm" >
        <div className="flex flex-col justify-between flex-1">
          <div>
            {navItems}
          </div>
          <div>
            {bottomNavItems}
          </div>
        </div>
      </AppShell.Navbar>

      <AppShell.Main>
        <div className={cn('w-[740px] mx-auto'
        )}>
          {children}
        </div>
      </AppShell.Main>
    </AppShell>
  );
}

export default MainLayout;

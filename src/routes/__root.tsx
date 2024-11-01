import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import MainLayout from '../components/MainLayout/MainLayout'
import { HomeIcon, InformationCircleIcon, ArrowLeftStartOnRectangleIcon, PencilIcon } from '@heroicons/react/20/solid'
import { compact } from 'lodash'
import { NavLink } from '@mantine/core'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const links: { name: string, link: string, icon: React.ReactElement | React.ReactNode }[] = [
    {
      name: 'Home',
      link:  '/',
      icon: <HomeIcon className='w-5 h-5 text-slate-600' />
    },
    { name: 'Blog', link: '/posts/', icon: <PencilIcon className='w-5 h-5 text-slate-600' /> },
    {
      name: 'About',
      link: '/about',
      icon: <InformationCircleIcon className='w-5 h-5 text-slate-600' />
    },
  ]
  const bottomLinks: { name: string, link: string, icon: React.ReactElement | React.ReactNode }[] = compact([
    {
      name: 'Log Out',
      link: '/logout',
      icon: <ArrowLeftStartOnRectangleIcon className="w-5 h-5 text-slate-600" />
    }
  ])

  const navItems = links.map(({ name, link, icon }) => {
    return <NavLink key={link} component={Link} to={link} label={name} leftSection={icon} />
  })
  const bottomNavItems = bottomLinks.map(({ name, link, icon }) => {
    return <NavLink key={link} component={Link} to={link} label={name} leftSection={icon} />
  })
  return <MainLayout navItems={navItems} bottomNavItems={bottomNavItems} />
}

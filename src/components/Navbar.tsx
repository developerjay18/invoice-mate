'use client';

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Button } from './ui/button';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/users/logout');
      toast.success(response.data.message);
      router.push('/login');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const listItems = [
    {
      href: '/maa-saraswati-road-carriers',
      title: 'Maa Saraswati Road Carriers',
    },
    {
      href: '/rising-freight-carrier',
      title: 'Rising Freight Carrier',
    },
    {
      href: '/sharma-transport',
      title: 'Sharma Transport',
    },
  ];

  return (
    <div className="px-20 py-5 flex items-center justify-between">
      <div className="logo text-2xl font-bold">Invoice Mate</div>
      <NavigationMenu>
        <NavigationMenuList className="px-0">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Companies</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                {listItems.map((item) => (
                  <ListItem key={item.title} href={item.href}>
                    {item.title}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer px-3">
            <Link href={'/'}>Home</Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer px-3">
            <Button onClick={handleLogout}>Logout</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="w-[250px]">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground min-w-full',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default Navbar;

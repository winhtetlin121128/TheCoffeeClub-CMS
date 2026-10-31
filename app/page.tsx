"use client";


import Footercontainer from '../components/landing/footer';
import Navbarcontainer from '../components/landing/navbar';
import Introcontainer from '../components/landing/intro';
import Eventcontainer from '../components/landing/event';
import Aboutcontainer from '../components/landing/about';
import Processcontainer from '../components/landing/process';
import Reviewcontainer from '../components/landing/review';
import { useRef } from 'react';

// add async
export default function Home() {

  // const { listUsers } = await import("../prisma/users");
  // const formatter = new Intl.DateTimeFormat("en", {
  //   dateStyle: "medium",
  //   timeStyle: "short",
  // });
  // const users = await listUsers(10).catch(() => undefined);

  const HomeRef = useRef(null)
  const ProcessRef = useRef(null);
  const EventRef = useRef(null);
  const ReviewRef = useRef(null);

  const ScrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  return (
    <main className="w-full h-full">
      {/* <div className="hero">
        <p className="eyebrow">Next.js + Prisma 8</p>

        <h1>Users from your database, loaded on the server.</h1>
        <p className="lede">
          This page reads from <code>src/app/page.tsx</code> using the Prisma 8 helper in{" "}
          <code>src/prisma/users.ts</code>.
        </p>
      </div>

      <section className="panel">
        <div className="panelHeader">
          <h2>Seeded users</h2>
          <span>{users?.length ?? 0} total</span>
        </div>

        {!users ? (
          <p className="empty">
            Could not query users yet. Run <code>contract:emit</code> and apply your schema,
            then refresh.
          </p>
        ) : users.length === 0 ? (
          <p className="empty">No users found.</p>
        ) : (
          <ul className="users">
            {users.map((user) => (
              <li key={user.id}>
                <div>
                  <strong>{user.name ?? "Unnamed user"}</strong>
                  <p>{user.username ? `@${user.username}` : user.email}</p>
                </div>
                {user.createdAt ? (
                  <time dateTime={user.createdAt}>
                    {formatter.format(new Date(user.createdAt))}
                  </time>
                ) : (
                  <span className="empty">No timestamp</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section> */}

        
        <div className='w-full'>
          <Navbarcontainer 
          ScrollToSection = {ScrollToSection}
          HomeRef = {HomeRef}
          ProcessRef = {ProcessRef}
          EventRef = {EventRef}
          />
          <Introcontainer 
          HomeRef = {HomeRef}
          />
          <Processcontainer 
          ProcessRef = {ProcessRef}
          />
          <Eventcontainer 
          EventRef = {EventRef}
          />
          <Reviewcontainer 
          ReviewRef = {ReviewRef}
          />
          <Footercontainer 
          ProcessRef = {ProcessRef}
          EventRef = {EventRef}
          HomeRef = {HomeRef}
          ScrollToSection = {ScrollToSection}
          />
        </div>
    </main>
  );
}

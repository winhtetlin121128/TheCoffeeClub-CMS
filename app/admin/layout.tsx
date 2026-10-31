import Navbar from '../../components/admin/navbar';
import Sidebar from '../../components/admin/sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 min-h-0 min-w-0 h-screen overflow-hidden">
        <Navbar />
        <main className="overflow-y-auto h-screen main-container">
          {children}
        </main>
      </div>
    </div>
  );
}
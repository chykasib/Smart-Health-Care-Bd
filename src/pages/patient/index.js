import Search from "@/components/Patient/Search";
import Appointment from "@/components/Patient/Appointment";
import Reports from "@/components/Patient/Reports";
import Communication from "@/components/Patient/Communication";

export default function PatientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Patient Dashboard</h1>
        <section className="space-y-6">
          <Search />
          <Appointment />
          <Reports />
          <Communication />
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";
import { RecordingsTable } from "./components/Recording";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-2 p-12">
    <RecordingsTable/>
    </main>
  );
}

 // <div>
    //   {/* Search input */}
    //   <input
    //     type="text"
    //     placeholder="Search by patient name..."
    //     value={filter}
    //     onChange={(e) => setFilter(e.target.value)}
    //   />
    //   <table>
    //     {/* Table Head */}
    //     <thead>
    //       <tr>
    //         <th onClick={() => handleSort('patientName')}>Patient Name</th>
    //         <th onClick={() => handleSort('date')}>Date</th>
    //         <th onClick={() => handleSort('medicalID')}>Medical ID</th>
    //         <th onClick={() => handleSort('condition')}>Condition</th>
    //         <th onClick={() => handleSort('location')}>Location</th>
    //         <th onClick={() => handleSort('docator')}>Doctor</th>
    //         <th onClick={() => handleSort('recordingLength')}>Recording Length</th>
    //         {/* ... other table headers */}
    //       </tr>
    //     </thead>
    //     {/* Table Body */}
    //     <tbody>
    //       {filteredAndSortedData.map((recording) => (
    //         <tr key={recording.id}>
    //           <td>{recording.patientName}</td>
    //           <td>{recording.date}</td>
    //           <td>{recording.medicalID}</td>
    //           <td>{recording.condition}</td>
    //           <td>{recording.location}</td>
    //           <td>{recording.doctor}</td>
    //           <td>{recording.recordingLength}</td>
    //           {/* ... other table cells */}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    

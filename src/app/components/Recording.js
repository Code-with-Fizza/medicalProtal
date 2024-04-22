// components/RecordingsTable.js
"use client";
import { patientRecordings } from "@/data/data";
import Link from "next/link";
import React, { useState, useMemo } from "react";

const sortOptions = {
  patientName: (a, b) => a.patientName.localeCompare(b.patientName),
  date: (a, b) => new Date(a.date) - new Date(b.date),
  // ...other sorting options
};

export const RecordingsTable = () => {
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [medicalIdFilter, setMedicalIdFilter] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // Filtered data based on selected location

  // Update selected location
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };
  const handleConditionChange = (e) => {
    setSelectedCondition(e.target.value);
  };
  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const data = [
    { id: 1, location: "ICU" },
    { id: 2, location: "Ward 1" },
    { id: 3, location: "Operating Room" },
    { id: 4, location: "ER" },
    { id: 5, location: "Ward 4" },
    { id: 5, location: "Ward 3" },
    { id: 5, location: "Ward 2" },
    // Add more data as needed
  ];

  const sortedData = useMemo(() => {
    let sorted = [...patientRecordings];
    if (sortKey) {
      sorted.sort(sortOptions[sortKey]);
      if (sortOrder === "desc") sorted.reverse();
    }
    return sorted;
  }, [sortKey, sortOrder]);

  const [nameFilter, setNameFilter] = useState("");

  // ... sorting logic ...

  const filteredData = useMemo(() => {
    return patientRecordings.filter(
      (item) =>
        item.patientName.toLowerCase().includes(nameFilter.toLowerCase()) &&
        item.medicalID.toLowerCase().includes(medicalIdFilter.toLowerCase()) &&
        (!selectedLocation ||
          item.location.toLowerCase() === selectedLocation.toLowerCase()) &&
        (!selectedCondition ||
          item.condition.toLowerCase() === selectedCondition.toLowerCase()) &&
        (!selectedDoctor ||
          item.doctor.toLowerCase() === selectedDoctor.toLowerCase())
    );
  }, [
    nameFilter,
    medicalIdFilter,
    selectedLocation,
    selectedDoctor,
    selectedCondition,
    patientRecordings,
  ]);
  const clearFilters = () => {
    setNameFilter("");
    setMedicalIdFilter("");
    setSelectedLocation("");
    setSelectedCondition("");
    setSelectedDoctor("");
  };

  const handleSort = (key) => {
    setSortOrder(sortOrder === "asc" && sortKey === key ? "desc" : "asc");
    setSortKey(key);
  };

  return (
    <>
    <div className="text-4xl   font-bold text-gray-800">Recordings</div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        
        <div class="flex gap-4 flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <div>
            <div className="flex flex-row gap-4">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by patient name..."
                  value={nameFilter}
                  onChange={(e) => setNameFilter(e.target.value)}
                />
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by medical ID"
                  value={medicalIdFilter}
                  onChange={(e) => setMedicalIdFilter(e.target.value)}
                />
              </div>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
            {/* <!-- Dropdown menu --> */}
          </div>
          <div className="flex flex-row gap-8">
            <select
              id="dropdownRadio"
              class=" p-2 space-y-1 text-sm text-gray-700 dark:text-gray-200  w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option
                value=""
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Select Location
              </option>
              <option
                value="ICU"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                ICU
              </option>
              <option
                value="Ward 1"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Ward 1
              </option>
              <option
                value="Operating Room"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Operating Room
              </option>
              <option
                value="ER"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                ER
              </option>

              <option
                value="Ward 4"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Ward 4
              </option>
              <option
                value="Ward 4"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Ward 2
              </option>
              <option
                value="Ward 4"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Ward 3
              </option>
            </select>
            <select
              id="dropdownRadio"
              class=" p-2 space-y-1 text-sm text-gray-700 dark:text-gray-200  w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              value={selectedCondition}
              onChange={handleConditionChange}
            >
              <option
                value=""
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Select Condition
              </option>
              <option
                value="Cardiac Arrest"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Cardiac Arrest
              </option>
              <option
                value="Stable"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Stable
              </option>
              <option
                value="Observation"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Observation
              </option>
              <option
                value="Recovering"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Recovering
              </option>

              <option
                value="  Under Surgery"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Under Surgery
              </option>
              <option
                value="  Post-Op"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Post-Op
              </option>
            </select>
            <select
              id="dropdownRadio"
              class=" p-2 space-y-1 text-sm text-gray-700 dark:text-gray-200  w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              value={selectedDoctor}
              onChange={handleDoctorChange}
            >
              <option
                value=""
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Select Doctor
              </option>
              <option
                value="Dr. James Strong"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Dr. James Strong
              </option>
              <option
                value="Dr. Rajesh Koothrappali"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Dr. Rajesh Koothrappali
              </option>
              <option
                value="Dr. Lisa Cuddy"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Dr. Lisa Cuddy
              </option>
              <option
                value="	Dr. Gregory House"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Dr. Gregory House
              </option>

              <option
                value="  	Dr. Cristina Yang"
                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Dr. Cristina Yang
              </option>
            </select>
         
          </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th
                scope="col"
                class="px-6 py-3"
                onClick={() => handleSort("patientName")}
              >
                Patient Name
              </th>
              <th
                scope="col"
                class="px-6 py-3"
                onClick={() => handleSort("date")}
              >
                Date
              </th>
              <th
                scope="col"
                class="px-6 py-3"
                onClick={() => handleSort("medicalID")}
              >
                Medical ID
              </th>
              <th scope="col" class="px-6 py-3">
                Condition
              </th>
              <th
                scope="col"
                class="px-6 py-3"
                onClick={() => handleSort("location")}
              >
                Location
              </th>
              <th scope="col" class="px-6 py-3">
                Doctor
              </th>
              <th scope="col" class="px-6 py-3">
                Recording Length
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((recording) => (
            
              <tr
                key={recording.id}
              
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>

                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
           <Link href="/EEG">
          {recording.patientName}
        </Link>
                </th>
                <td class="px-6 py-4">{recording.date}</td>
                <td class="px-6 py-4">{recording.medicalID}</td>
                <td class="px-6 py-4">{recording.condition}</td>
                <td class="px-6 py-4">{recording.location}</td>
                <td class="px-6 py-4">{recording.doctor}</td>
                <td class="px-6 py-4">{recording.recordingLength}</td>
                {/* ... other table cells */}
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

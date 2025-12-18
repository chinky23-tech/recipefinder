import { useState } from "react";
import { mockPharmacies } from "../data/mockPharmacy";
import PharmacyList from "../Components/PharmacyList";
import PharmacyForm from "../Components/PharmacyForm";
import MoreAboutYou from "../Components/MoreAboutYou";

export default function Signup() {
  const [pharmacies, setPharmacies] = useState(mockPharmacies);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [step, setStep] = useState(1); // 1 = pharmacy, 2 = profile

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">

        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-6">Select Pharmacy</h2>

            {!showAddForm && (
              <PharmacyList
                pharmacies={pharmacies}
                selected={selectedPharmacy}
                onSelect={(id) => {
                  setSelectedPharmacy(id);
                  setStep(2); // 👈 move to next step
                }}
                onAddNew={() => setShowAddForm(true)}
              />
            )}

            {showAddForm && (
              <PharmacyForm
                onCancel={() => setShowAddForm(false)}
                onSave={(newPharmacy) => {
                  setPharmacies((prev) => [...prev, newPharmacy]);
                  setSelectedPharmacy(newPharmacy.id);
                  setShowAddForm(false);
                  setStep(2); // 👈 move to next step
                }}
              />
            )}
          </>
        )}

        {step === 2 && (
          <MoreAboutYou
            pharmacyId={selectedPharmacy}
            onLogout={() => {
              alert("Logout");
              
            }}
          />
        )}

      </div>
    </div>
  );
}

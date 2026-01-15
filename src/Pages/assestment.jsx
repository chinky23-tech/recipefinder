/*
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function AssessmentView() {
    console.log("AssessmentView MOUNTED");
  const { id } = useParams();

  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pdfLoading, setPdfLoading] = useState(false);

  /* Fetch Assessment *

  useEffect(() => {
    if (!id) return;

    const fetchAssessment = async () => {
      try {
        const res = await api.get(`/assessments/${id}`);

        //  backend response
        setAssessment({
          id: res.data.id,
          pdfUrl: res.data.pdfUrl,
          ...res.data.data
        });
      } catch (err) {
        console.error(err);
        setError("Unable to load assessment details");
      } finally {
        setLoading(false);
      }
    };

    fetchAssessment();
  }, [id]);

  /*  Generate PDF  

  const handleGeneratePdf = async () => {
    try {
      setPdfLoading(true);
      const res = await api.post(`/assessments/${id}/pdf`);

      setAssessment(prev => ({
        ...prev,
        pdfUrl: res.data.url
      }));
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF");
    } finally {
      setPdfLoading(false);
    }
  };

  /* States 

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading assessment...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!assessment) {
    return (
      <div className="p-6 text-center text-gray-500">
        No assessment data found.
      </div>
    );
  }

  {/*  UI *

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Assessment View
      </h1>

      {/* BASIC DETAILS *
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Detail label="Patient Name" value={assessment.patientName} />
          <Detail label="Age" value={assessment.age} />
          <Detail label="Gender" value={assessment.gender} />
          <Detail label="Assessment Date" value={assessment.assessmentDate} />
        </div>
      </Card>

      {/* DYNAMIC SECTIONS *
      {assessment.sections?.map((section, index) => (
        <Card key={index}>
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            {section.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.fields?.map((field, fIndex) => (
              <Detail
                key={fIndex}
                label={field.label}
                value={field.value}
              />
            ))}
          </div>
        </Card>
      ))}

      {/* PDF ACTION *
      <Card>
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700">
            Assessment Report
          </span>

          {assessment.pdfUrl ? (
            <a
              href={assessment.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                View PDF
              </Button>
            </a>
          ) : (
            <Button
              variant="secondary"
              loading={pdfLoading}
              onClick={handleGeneratePdf}
            >
              Generate PDF
            </Button>
          )}
        </div>
      </Card>
    </div>
  );


/* Read-only Field 

function Detail({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">
        {label}
      </span>
      <span className="text-base font-medium text-gray-800">
        {value ?? "-"}
      </span>
    </div>
  );
}}*/
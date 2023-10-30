import { useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {
  defaultLayoutPlugin,
  setInitialTabFromPageMode,
} from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

function Upload() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin(
    setInitialTabFromPageMode
  );
  //PDF file onChange
  const [pdf, setPdf] = useState(null);
  //PDF file errorState
  const [pdfError, setPdfError] = useState(null);

  //handle file onChange event
  const allowedFile = ["application/pdf"];
  const pdfHnadler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && allowedFile.includes(selectedFile.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdf(e.target.result);
          //console.log(e.target.result);
        };
      } else {
        setPdfError("Not a valid pdf: please select only pdf");
      }
    }
  };

  return (
    <div className="container">
      <form>
        <label>
          <h5>Upload PDF</h5>
        </label>
        <br />
        <br />
        <input type="file" className="form-control" onChange={pdfHnadler} />
        {pdfError && <span className="text-danger">{pdfError}</span>}
      </form>

      {/* View PDF */}
      <h5>View PDF</h5>
      <div className="viewer">
        {pdf && (
          <div style={{ height: "750px" }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={pdf} />
            </Worker>
          </div>
        )}
        {!pdf && <>No File is selected yet</>}
      </div>
    </div>
  );
}

export default Upload;

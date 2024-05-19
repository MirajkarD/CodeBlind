import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github_dark";
import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PythonCodeEditor = () => {
  const [documents, setDocuments] = useState([
    { id: 1, title: "main.py", content: "" },
  ]);
  const [activeDocumentId, setActiveDocumentId] = useState(1);
  const [editingDocumentId, setEditingDocumentId] = useState(null);
  const [newDocumentName, setNewDocumentName] = useState("");

  const handleNewDocument = () => {
    const newId = documents.length + 1;
    const newDocument = { id: newId, title: `Untitled_${newId}`, content: "" };
    setDocuments([...documents, newDocument]);
    setActiveDocumentId(newId);
  };

  const handleCloseDocument = (id) => {
    const updatedDocuments = documents.filter((doc) => doc.id !== id);
    setDocuments(updatedDocuments);
    setActiveDocumentId(updatedDocuments[0].id); // Set the first document as active after closing
  };

  const handleTabClick = (id) => {
    setActiveDocumentId(id);
  };

  const handleEditorChange = (value) => {
    const updatedDocuments = documents.map((doc) =>
      doc.id === activeDocumentId ? { ...doc, content: value } : doc
    );
    setDocuments(updatedDocuments);
  };

  const handleDocumentRename = (id) => {
    const updatedDocuments = documents.map((doc) =>
      doc.id === id
        ? { ...doc, title: newDocumentName.trim() || doc.title }
        : doc
    );
    setDocuments(updatedDocuments);
    setEditingDocumentId(null);
  };

  const handleInputChange = (e) => {
    setNewDocumentName(e.target.value);
  };

  const activeDocument = documents.find((doc) => doc.id === activeDocumentId);

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CodeBlind</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ marginTop: "40px" }}>
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "50px",
          }}
        >
          <div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {documents.map((doc) => (
                <li
                  key={doc.id}
                  onDoubleClick={() => setEditingDocumentId(doc.id)}
                  onClick={() => handleTabClick(doc.id)}
                  className={doc.id === activeDocumentId ? "active" : ""}
                  style={{
                    display: "inline-block",
                    marginRight: "0px",
                    marginTop: "0px",
                    cursor: "pointer",
                    padding: "10px",
                    borderRadius: "5px",
                    background:
                      doc.id === activeDocumentId ? "#fff" : "transparent",
                    color: doc.id === activeDocumentId ? "#000" : "#333",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    border: "none",
                  }}
                >
                  {editingDocumentId === doc.id ? (
                    <input
                      type="text"
                      value={newDocumentName}
                      onChange={handleInputChange}
                      onBlur={() => handleDocumentRename(doc.id)}
                      autoFocus
                    />
                  ) : (
                    <span
                      style={{
                        display: "inline-block",
                        width: "90px",
                        marginTop: "15px",
                        marginLeft: doc.title === "main.py" ? "0" : "5px",
                      }}
                    >
                      {doc.title}
                    </span>
                  )}
                  {doc.title.startsWith("Untitled_") && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseDocument(doc.id);
                      }}
                      style={{
                        background: "transparent",
                        cursor: "pointer",
                        color: "#777",
                        marginBottom: "25px",
                        marginTop: "25px",
                        border: "none",
                        height: "25px",
                      }}
                    >
                      X
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleNewDocument}
            className="btn btn-outline-primary"
            style={{ marginRight: "10px" }}
          >
            +
          </button>
        </div>
        {activeDocument && (
          <AceEditor
            theme="github_dark" // Use a dark theme, such as "github_dark"
            name="code-editor"
            onChange={handleEditorChange}
            fontSize={14}
            value={activeDocument.content}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%",
              height: "calc(80vh - 80px)",
              backgroundColor: "#1e1e1e", // Set dark background color
              color: "#1e1e1e", // Set white font color
            }}
            setOptions={{
              highlightActiveLine: false, // Disable line highlighting
            }}
            editorProps={{
              $blockScrolling: Infinity,
            }}
            className="custom-ace-editor"
          />
        )}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              // Handle Go Back action
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Go Back
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              // Handle Submit action
            }}
          >
            Submit
          </button>
        </div>
      </Container>
    </div>
  );
};

export default PythonCodeEditor;

import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import details from "../data/details.json";
import "../styles/CodingSolve.css";

export default function CodingSolve() {
  const { id } = useParams();
  const navigate = useNavigate();

  const question = useMemo(() => {
    const q = (details ?? []).find((x) => String(x.id) === String(id));
    return (
      q ?? {
        id,
        title: "Coding Question",
        language: "Python",
        statement: "",
        notes: [],
        example: "",
        starterCode: "# Write your code here\n\ndef first_and_last_position(arr, k):\n    pass\n",
      }
    );
  }, [id]);

  const [language, setLanguage] = useState(question.language || "Python");
  const [code, setCode] = useState(question.starterCode || "");
  const [tab, setTab] = useState("sample"); // sample | custom
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const onRun = () => {
    setOutput(
      `Mock Run ✅\n\nLanguage: ${language}\n\nCustom Input:\n${input || "(empty)"}\n`
    );
  };

  const onSubmit = () => {
    setOutput("Mock Submit ✅\n\nVerdict: Accepted (demo)\n");
  };

  const toggleFullscreen = () => {
    const el = document.getElementById("solve-editor-shell");
    if (!el) return;

    if (!document.fullscreenElement) el.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  return (
    <div className="solve-page">
      <div className="container solve-maxWrap">
        {/* Page Title */}
        <h2 className="solve-title text-center">
          <span style={{ color: "#e41f3a" }}>Coding</span> Questions
        </h2>

        {/* ===== TOP QUESTION BLOCK (Scrollable + SAME SIZE as editor block) ===== */}
        <div className="solve-problemCard solve-panel">
          <div className="solve-problemTitle">
            <span className="fw-bold">{question.id}. </span>
            {question.title}
          </div>

          <div className="solve-subHeading">Problem Statement</div>

          <div className="solve-text">{question.statement}</div>

          {question.notes?.length ? (
            <>
              <div className="solve-noteLabel">Note :</div>
              <ol className="solve-notes">
                {question.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ol>
            </>
          ) : null}

          {question.example ? <div className="solve-text">{question.example}</div> : null}

          <div className="solve-detailHeading">
            Detailed Explanation ( Input/Output Format, Notes, Images )
          </div>
          <div className="solve-detailHint">Keyboard_arrow_down</div>
        </div>

        {/* ===== EDITOR + CONSOLE (SAME SIZE as top block) ===== */}
        <div id="solve-editor-shell" className="solve-editorShell solve-panel">
          {/* Top Bar */}
          <div className="solve-topBar d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div className="d-flex align-items-center gap-2">
              <select
                className="form-select solve-langSelect"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option>Python</option>
                <option>Java</option>
                <option>C++</option>
                <option>JavaScript</option>
              </select>

              {/* Reset (FontAwesome) */}
              <button
                type="button"
                className="solve-iconBtn"
                title="Reset"
                onClick={() => setCode(question.starterCode || "")}
              >
                <i className="fa-solid fa-rotate-right" />
              </button>
            </div>

            <div className="d-flex align-items-center gap-2">
              {/* Settings (FontAwesome) */}
              <button type="button" className="solve-iconBtn" title="Settings">
                <i className="fa-solid fa-gear" />
              </button>

              {/* Maximize (FontAwesome) */}
              <button
                type="button"
                className="solve-iconBtn"
                title="Maximize"
                onClick={toggleFullscreen}
              >
                <i className="fa-solid fa-up-right-and-down-left-from-center" />
              </button>

              <button type="button" className="solve-backBtn" onClick={() => navigate("/coding")}>
                <i className="fa-solid fa-arrow-left me-2" />
                Back
              </button>
            </div>
          </div>

          <div className="row g-0 solve-panelBody">
            {/* Editor */}
            <div className="col-12 col-lg-8">
              <div className="solve-editorArea">
                <div className="solve-gutter" aria-hidden="true">
                  {Array.from({ length: Math.max(18, code.split("\n").length + 3) }).map(
                    (_, i) => (
                      <div key={i} className="solve-lineNo">
                        {i + 1}
                      </div>
                    )
                  )}
                </div>

                <textarea
                  className="solve-code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Console */}
            <div className="col-12 col-lg-4">
              <div className="solve-console">
                <div className="solve-consoleHeader">Console</div>

                <div className="solve-consoleTabs">
                  <button
                    type="button"
                    className={`solve-tab ${tab === "sample" ? "active" : ""}`}
                    onClick={() => setTab("sample")}
                  >
                    Sample
                  </button>
                  <button
                    type="button"
                    className={`solve-tab ${tab === "custom" ? "active" : ""}`}
                    onClick={() => setTab("custom")}
                  >
                    Custom
                  </button>
                </div>

                <div className="solve-consoleBody">
                  {/* Sample matches screenshot style (box + placeholder-like text) */}
                  {tab === "sample" ? (
                    <div className="solve-sampleBox">
                      <div className="solve-miniLabel">Sample</div>
                      <div className="solve-sampleText">
                        Write Your Input Cases Here Like 1234
                      </div>
                    </div>
                  ) : (
                    <textarea
                      className="solve-io"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={"Write Your Input Cases Here Like\n1234"}
                      spellCheck={false}
                    />
                  )}

                  <div className="solve-outputWrap">
                    <div className="solve-outputLabel">Output</div>
                    <pre className="solve-output">{output || "—"}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Run / Submit */}
        <div className="solve-actions d-flex justify-content-center gap-4">
          <button type="button" className="solve-runBtn" onClick={onRun}>
            Run
          </button>
          <button type="button" className="solve-submitBtn" onClick={onSubmit}>
            Submit
          </button>
        </div>

        <div className="pb-5" />
      </div>
    </div>
  );
}
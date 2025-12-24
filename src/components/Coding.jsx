import React, { useMemo, useState } from "react";
import "../styles/Coding.css";
import data from '../data/data.json'
import { useNavigate } from "react-router-dom";


export default function Coding() {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();


  // Normalize once so UI never breaks if JSON keys differ
  const normalizedData = useMemo(() => {
    return (data ?? []).map((row, idx) => {
      const questionSummary = String(
        row?.questionSummary ?? row?.question_summary ?? row?.summary ?? ""
      );

      const testCaseCount = Number(
        row?.testCaseCount ?? row?.test_case_count ?? 0
      );

      const lang = String(row?.language ?? "");

      return {
        id: row?.id ?? idx + 1,
        questionSummary,
        testCaseCount,
        language: lang,
      };
    });
  }, []);

  // Language dropdown options from normalized data
  const languages = useMemo(() => {
    const set = new Set(
      normalizedData.map((d) => d.language).filter((x) => x && x.trim())
    );
    return ["", ...Array.from(set)];
  }, [normalizedData]);

  // Filtered results (safe: no toLowerCase on undefined)
  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();

    return normalizedData.filter((row) => {
      const matchesSearch =
        !s || row.questionSummary.toLowerCase().includes(s);

      const matchesLang = !language || row.language === language;

      return matchesSearch && matchesLang;
    });
  }, [normalizedData, search, language]);

  const onSolve = (row) => {
    // TODO: connect routing later
    navigate(`/coding/${row.id}`);
  };


  return (
    <div className="coding-page">
      <div className="container">
        {/* Title */}
        <h2 className="coding-title text-center">
          <span style={{ color: "#e41f3a" }}>Coding</span> Questions
        </h2>

        {/* Search + Dropdown row */}
        <div className="row g-3 justify-content-center align-items-center coding-filters">
          <div className="col-12 col-lg-7">
            <div className="coding-searchWrap">
              <input
                className="form-control coding-searchInput"
                placeholder="Search ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <span className="coding-searchIcon" aria-hidden="true">
                {/* Magnifier */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16.5 16.5 21 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <select
              className="form-select coding-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">Language ...</option>
              {languages
                .filter((x) => x !== "")
                .map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="coding-tableOuter">
          <div className="table-responsive coding-tableResponsive">
            <table className="table coding-table mb-0">
              <thead>
                <tr>
                  <th className="coding-th-summary">Question Summary</th>
                  <th className="coding-th tc text-center">
                    Test Case <br /> Count
                  </th>
                  <th className="coding-th lang text-center">Language</th>
                  <th className="coding-th actions text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((row) => (
                  <tr key={row.id}>
                    <td className="coding-td-summary">
                      <div className="coding-summaryText">
                        {row.questionSummary || "-"}
                      </div>
                    </td>

                    <td className="text-center align-middle">
                      {Number.isFinite(row.testCaseCount)
                        ? row.testCaseCount
                        : 0}
                    </td>

                    <td className="text-center align-middle">
                      {row.language || "-"}
                    </td>

                    <td className="text-center align-middle">
                      <button
                        type="button"
                        className="coding-solveBtn"
                        onClick={() => onSolve(row)}
                      >
                        <span className="coding-bulb" aria-hidden="true">
                          {/* Bulb icon */}
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M9 21h6"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M10 17h4"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M12 2a7 7 0 0 0-4 12.74V16a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.26A7 7 0 0 0 12 2Z"
                              stroke="#fff"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                        <span className="coding-solveText">Solve</span>
                      </button>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-muted py-4">
                      No questions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pb-5" />
      </div>
    </div>
  );
}
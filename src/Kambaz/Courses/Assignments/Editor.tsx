export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select defaultValue="ASSIGNMENTS" id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select defaultValue="PERCENTAGE" id="wd-display-grade-as">
              <option value="PERCENTAGE">PERCENTAGE</option>
              <option value="POINTS">POINTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select defaultValue="ONLINE" id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="PHYSICAL">Physical</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label> Online Entry Options </label>
            <br />
            <input type="checkbox" name="entry-options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="entry-options" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="entry-options"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="entry-options"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" name="entry-options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            Assign
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value={"Everyone"} />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" value="" id="wd-due-date" />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <label htmlFor="wd-available-from">Available from</label>
            <br />
            <input type="date" value="" id="wd-available-from" />
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input type="date" value="" id="wd-available-until" />
          </td>
        </tr>
        <tr>
          <td>
            <hr />
          </td>
          <td>
            <hr />
          </td>
          <td>
            <hr />
          </td>
        </tr>
        <tr>
          <td />
          <td />
          <td align="right" valign="top">
            <button>Cancel</button> <button>Save</button>
          </td>
        </tr>
      </table>
      <hr />
    </div>
  );
}

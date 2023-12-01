import React from "react";
import Out2 from "../../pages/student/layout2/Out2";

function ProfileModal() {
  return (
    <>
      <Out2>
        <div className="danyal">
          <div className="profileHeader">
            <b>Profile</b>
          </div>
          <div className="profile-main">
            <form className="profile-form">
              <div className="avatar-img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/campus-app-1c4b8.appspot.com/o/images%2FqsmaBPV33ZfakuLrZOs2L8SLWKI3?alt=media&amp;token=8d5b1e48-06c4-4cf1-9fa4-4035fac64847"
                  alt="profile"
                  id="avatar"
                  sx="[object Object]"
                />
                <label className="icon-avatar" htmlFor="file-input">
                  <svg
                    className="MuiSvgIcon-root icon-camera css-1okqa6k"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="CameraAltIcon"
                    type="file"
                    width="16"
                    height="16"
                  >
                    <circle cx="12" cy="12" r="3.2"></circle>
                    <path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
                  </svg>
                </label>
                <input id="file-input" type="file" accept="image/*" />
              </div>
            </form>
          </div>
          <div className="mainProfileData">
            <div className="profile-data">
              <div className="profileData">
                <div className="profileIconText">
                  <b>Name:</b>
                </div>
                <div className="profileText">Danyal khan</div>
              </div>
              <div className="profileData">
                <div className="profileIconText">
                  <b>Category:</b>
                </div>
                <div className="profileText">Student</div>
              </div>
              <div className="profileData">
                <div className="profileIconText">
                  <b>Experience:</b>
                </div>
                <div className="profileText">fresher</div>
              </div>
              <div className="profileData">
                <div className="profileIconText">
                  <b>Email:</b>
                </div>
                <div className="profileText">mkisnot@gmail.com</div>
              </div>
            </div>
            <div className="edit">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSuccess MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedSuccess MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-o0kyn4"
                tabIndex="0"
                type="button"
              >
                <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="EditIcon"
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                  </svg>
                </span>
                Profile Edit
                <span className="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </div>
          </div>
        </div>
      </Out2>
    </>
  );
}

export default ProfileModal;

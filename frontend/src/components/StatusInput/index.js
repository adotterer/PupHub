import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserStatus } from "../../store/user_details";
import { fetch } from "../../store/csrf.js";

export default function StatusInput() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(
    useSelector((state) => state.userDetails.status || null)
  );
  const user = useSelector((state) => state.session.user);

  useEffect(async () => {
    if (!status) {
      try {
        const dbStatus = await fetch(`/api/user/${user.id}/status`);
        dispatch(setUserStatus(dbStatus.data));
        setStatus(dbStatus.data);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return (
    <input
      maxLength="255"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      onBlur={(e) => dispatch(setUserStatus(e.target.value))}
      className="input__status"
      type="text"
      placeholder="Set your status"
    />
  );
}

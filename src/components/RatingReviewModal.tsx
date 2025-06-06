import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Star } from "lucide-react";

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const RatingReviewModal: React.FC<Props> = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", designation: "", otp: "", review: "" });
  const [rating, setRating] = useState(0);
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleSendOtp = () => {
    const otp = generateOtp();
    console.log("Generated OTP:", otp);
    setGeneratedOtp(otp);
    setOtpSent(true);
    alert("OTP sent to your email (check console in mock)");
  };

  const handleVerifyAndSubmit = () => {
    if (form.otp !== generatedOtp) {
      alert("Invalid OTP");
      return;
    }
    onSubmit({ ...form, rating });
    handleClose()
  };

  const handleClose = () => {
    setForm({ name: "", email: "", designation: "", otp: "", review: "" });
    setRating(0);
    setOtpSent(false);
    onClose();
  }

  return (
    <Dialog open={open} onClose={handleClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4 bg-black/50">
        <Dialog.Panel className="bg-white dark:bg-dark-800 p-6 rounded-md w-full max-w-md space-y-4">
          <Dialog.Title className="text-lg font-bold text-center">Leave a Review</Dialog.Title>
          <input className="input" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input className="input" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          <input className="input" placeholder="Designation" value={form.designation} onChange={e => setForm({ ...form, designation: e.target.value })} />
          {!otpSent ? (
            <button className="btn bg-blue-500 text-white" onClick={handleSendOtp}>Send OTP</button>
          ) : (
            <>
              <input className="input" placeholder="Enter OTP" value={form.otp} onChange={e => setForm({ ...form, otp: e.target.value })} />
              <textarea className="input" placeholder="Write your review" value={form.review} onChange={e => setForm({ ...form, review: e.target.value })} />
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`cursor-pointer ${star <= rating ? "text-yellow-500" : "text-gray-400"}`}
                    onClick={() => setRating(star)}
                    fill={star <= rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <button className="btn bg-green-500 text-white mt-2" onClick={handleVerifyAndSubmit}>Submit Review</button>
              <button className="btn bg-gray-300 mt-2 ml-3" onClick={handleClose}>Cancel</button>
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default RatingReviewModal;

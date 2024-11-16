import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Customer } from "@/types/customer.types";

export const getCustomers = async () => {
  const docRef = doc(db, "customers", "AJh0Guw6IZzTxKkHO63s");

  try {
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? (docSnap.data().customers as Customer[]) : [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

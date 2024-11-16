import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Sale } from "@/types/sales.types";

export const getSalesData = async () => {
  const docRef = doc(db, "sales", "AJh0Guw6IZzTxKkHO63s");

  try {
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? (docSnap.data().sales as Sale[]) : [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

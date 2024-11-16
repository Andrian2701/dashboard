import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Product } from "@/types/product.types";

export const getProducts = async () => {
  const docRef = doc(db, "products", "AJh0Guw6IZzTxKkHO63s");

  try {
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? (docSnap.data().products as Product[]) : [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

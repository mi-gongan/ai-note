import { NoteUnit } from "@/redux/slice/note";
import { db } from "./config";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export type NoteDataType = {
  category: string;
  summaryText: string;
  title: string;
  userEmail: string;
  widget: number[];
};

export class NoteDB {
  static setNote = async (
    userEmail: string,
    noteId: string,
    summaryText: string,
    submitData: {
      title: string;
      category: string;
      widget: number[];
    } | null
  ) => {
    const noteRef = doc(db, "note", noteId);
    await setDoc(
      noteRef,
      {
        userEmail,
        summaryText,
        ...submitData,
      },
      { merge: true }
    );
  };
  static getNoteByEmail = async (userEmail: string) => {
    const q = query(
      collection(db, "note"),
      where("userEmail", "==", userEmail)
    );

    const querySnap = await getDocs(q);

    let noteArray: NoteUnit[] = [];
    querySnap.forEach((doc) => {
      noteArray.push({
        noteId: doc.id,
        ...(doc.data() as {
          summaryText: string;
          title: string;
          category: string;
          userEmail: string;
        }),
      });
    });
    return noteArray;
  };

  static getNoteById = async (noteId: string): Promise<NoteDataType> => {
    const docRef = doc(db, "note", noteId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as NoteDataType;
    } else {
      throw Error("no data");
    }
  };

  static updateWidget = async (noteId: string, widget: number[]) => {
    const noteRef = doc(db, "note", noteId);
    await setDoc(
      noteRef,
      {
        widget,
      },
      { merge: true }
    );
  };

  static deleteNote = async (noteId: string) => {
    const noteRef = doc(db, "note", noteId);
    await deleteDoc(noteRef);
  };
}

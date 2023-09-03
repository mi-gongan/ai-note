import RightArrowIcon from "@/components/icon/RightArrowIcon";
import { cls } from "@/utils/style";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

interface NoteListProps {
  noteList: any[];
  setNoteList: any;
}

function NoteList({ noteList, setNoteList }: NoteListProps) {
  const router = useRouter();
  const { user, note: noteIdParam } = useParams();

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(noteList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setNoteList(items);

    //TODO: db에 순서 업데이트 요청
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="note-list">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="note-list"
          >
            {noteList.map((note, idx) => (
              <Draggable
                draggableId={note.noteId}
                index={idx}
                key={note.noteId}
              >
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div
                        className={cls(
                          "font-rota text-[18px] text-primary font-[500] pl-[14px] py-2 cursor-pointer",
                          note.noteId === noteIdParam?.toString()
                            ? "bg-[#DADFE7]"
                            : "",
                          "hover:bg-[#DADFE7]",
                          "flex items-center"
                        )}
                        onClick={() => {
                          router.push("/" + user + "/" + note.noteId);
                        }}
                      >
                        <RightArrowIcon />
                        <div>{note.title}</div>{" "}
                      </div>
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default NoteList;

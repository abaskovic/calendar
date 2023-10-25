import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { formatDateTime } from "../../utils/dateHelper";
import { parseISO } from "date-fns";
import PropTypes from "prop-types";
import { Button } from "./Button";
export const ShowMoreDialog = ({ data, open, setOpen }) => {
  const message = data.data.message;
  const author = data.data.author.name;
  const authorImageUrl = data.data.author.avatarUrl;
  const url = data.data.url;
  const date = formatDateTime(parseISO(data.data.committedDate));


  return (
    <Dialog.Root open={open} onOpenChange={setOpen} className="">
      <Dialog.Overlay className="fixed  inset-0 bg-black opacity-30 z-20" />

      <Dialog.Content className="text-darkMint  z-30 p-12 rounded-lg bg-gray-200 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:min-w-[37.5rem]">
        <div className="absolute top-2 right-2">
          <Button>
            <X />
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Commit Event Info</h1>
          <div className="flex flex-col gap-2">
            <p> <span className="text-black">Messagge:</span> {message}</p>
            <div className="flex flex-col gap-4 md:items-center md:flex-row">
              <p className="text-black">Author: </p>
              <img
                className="w-10 h-10 hover hover:w-32 hover:h-32 transition-all duration-300  rounded-full"
                src={authorImageUrl}
                alt={`${author} avatar`}
              />
              <p>{author}</p>
            </div>

            <p><span className="text-black">Committed on: </span> {date}</p>
          </div>
          <Button href={url}>View Commit</Button>
        </div>
        <Dialog.Close asChild></Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
  
}

ShowMoreDialog.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      message: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
      }).isRequired,
      url: PropTypes.string.isRequired,
      committedDate: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}
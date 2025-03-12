import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/_shadcn/dialog";
import { Toaster } from "@components/_shadcn/toaster";
import { PiShareFatLight } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

export function ShareMenu() {
  const { id } = useParams();

  const videoUrl = `${window.location.origin}/watch/${id}`;
  return (
    <Dialog>
      <DialogTrigger className="px-3 rounded-full overflow-hidden hover:brightness-90">
        <PiShareFatLight className="mr-2" />
        공유
      </DialogTrigger>
      <DialogContent className="bg-basic-02">
        <DialogHeader>
          <DialogTitle className="text-sm !text-font-01">공유</DialogTitle>
        </DialogHeader>
        <div className="flex-center gap-4 p-2 rounded-lg bg-basic-01">
          <input
            type="text"
            className="w-full h-6 bg-transparent text-font-01 focus:outline-none"
            readOnly
            value={videoUrl}
          />
          <button
            className="bg-font-01 !text-basic-01 rounded-full text-nowrap py-1 px-4"
            onClick={() => {
              navigator.clipboard.writeText(videoUrl);
              toast("📋 영상 링크가 복사되었습니다.");
            }}
          >
            복사
          </button>
        </div>
      </DialogContent>
      <Toaster />
    </Dialog>
  );
}

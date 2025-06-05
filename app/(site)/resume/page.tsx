// app/resume/page.tsx
import ResumePage from '@/components/PdfViewer/ResumePage';

export const metadata = {
  title: "Resume | Saket Singh",
  description: "View Saket Singh's professional resume showcasing skills, experience, education, and technical proficiencies.",
};

export default function Resume() {
  return <ResumePage />;
}

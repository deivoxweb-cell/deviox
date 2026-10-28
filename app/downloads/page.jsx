import DownloadsPage from "@/src/components/DownloadsPage";

export const metadata = {
  title: "Downloads | DEI VOX Certificates & Brochure",
  description:
    "Download DEI VOX ISO quality certificates and company brochure.",
  alternates: { canonical: "/downloads" },
};

export default function Page() {
  return <DownloadsPage />;
}

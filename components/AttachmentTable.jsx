import { FaRegFilePdf } from "react-icons/fa6";

const attachments = [
  {
    name: "Brochure",
    size: "2.88 MB",
    url: "/form/Brochure.pdf",
  },
  {
    name: "Application Form",
    size: "3.25 MB",
    url: "/form/Application Form.pdf",
  },
  {
    name: "List of Purchasers (Joint Purchase)",
    size: "80 KB",
    url: "/form/List of Purchasers (Joint Purchase).pdf",
  },
  {
    name: "Client Information Update Form",
    size: "250 KB",
    url: "/form/Client Information Update request Form.pdf",
  },
  {
    name: "Plot Selection Form (Lottery)",
    size: "135 KB",
    url: "/form/Plot Selection form (Lottery).pdf",
  },
];

export default function AttachmentTable() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-4 text-gray-700 text-sm font-semibold">
              Attachment
            </th>
            <th className="pb-4 text-gray-700 text-sm font-semibold text-right">
              Size
            </th>
          </tr>
        </thead>

        <tbody>
          {attachments.map((file, index) => (
            <tr
              key={index}
              className="border-b cursor-pointer hover:bg-gray-50 transition"
              onClick={() => window.open(file.url, "_blank")}
            >
              <td className="py-3 flex items-center gap-3">
                <FaRegFilePdf className="text-red-500 text-xl" />
                <span className="text-gray-800 font-medium hover:text-secondary transition">
                  {file.name}
                </span>
              </td>

              <td className="py-3 text-right text-gray-600">{file.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

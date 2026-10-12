import PortalLogin from "@/components/portal/PortalLogin";
import { portalPageProps } from "@/lib/portal/page";
export default function ResetPasswordPage(props) {
  return <PortalLogin {...props} reset />;
}
ResetPasswordPage.portalPage = true;
export const getServerSideProps = portalPageProps;

import PortalLogin from "@/components/portal/PortalLogin";
import { portalPageProps } from "@/lib/portal/page";
export default function LoginPage(props) {
  return <PortalLogin {...props} />;
}
LoginPage.portalPage = true;
export const getServerSideProps = portalPageProps;

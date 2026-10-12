import OwnerPortal from "@/components/portal/OwnerPortal";
import { portalPageProps } from "@/lib/portal/page";
export default function ClientPortalPage(props) {
  return <OwnerPortal {...props} role="client" />;
}
ClientPortalPage.portalPage = true;
export const getServerSideProps = portalPageProps;

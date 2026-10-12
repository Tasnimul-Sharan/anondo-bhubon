import OwnerPortal from "@/components/portal/OwnerPortal";
import { portalPageProps } from "@/lib/portal/page";
export default function AdminPage(props) {
  return <OwnerPortal {...props} role="admin" />;
}
AdminPage.portalPage = true;
export const getServerSideProps = portalPageProps;

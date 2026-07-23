import useDeviceType from "../hooks/useDeviceType";
import DesktopLayout from "../layouts/DesktopLayout";
import MobileLayout from "../layouts/MobileLayout";

export default function Home(props) {
  const device = useDeviceType();

  return device.isDesktop
      ? <DesktopLayout {...props} />
      : <MobileLayout {...props} />;
}
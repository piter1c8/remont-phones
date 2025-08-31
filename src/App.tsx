import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import RepairTypes from "./pages/RepairTypes";
import Brands from "./pages/Brands";
import Diagnostics from "./pages/Diagnostics";
import Warranty from "./pages/Warranty";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import ScreenRepair from "./pages/ScreenRepair";
import BatteryReplacement from "./pages/BatteryReplacement";
import WaterDamage from "./pages/WaterDamage";
import SoftwareRepair from "./pages/SoftwareRepair";
import DataRecovery from "./pages/DataRecovery";
import CameraRepair from "./pages/CameraRepair";
import SpeakerRepair from "./pages/SpeakerRepair";
import ChargingPort from "./pages/ChargingPort";
import ButtonRepair from "./pages/ButtonRepair";
import CaseReplacement from "./pages/CaseReplacement";
import MicropaykaRepair from "./pages/MicropaykaRepair";
import MotherboardRepair from "./pages/MotherboardRepair";
import IPhoneRepair from "./pages/IPhoneRepair";
import SamsungRepair from "./pages/SamsungRepair";
import XiaomiRepair from "./pages/XiaomiRepair";
import HuaweiRepair from "./pages/HuaweiRepair";
import OnePlusRepair from "./pages/OnePlusRepair";
import GooglePixelRepair from "./pages/GooglePixelRepair";
import SonyRepair from "./pages/SonyRepair";
import ExpressRepair from "./pages/ExpressRepair";
import EmergencyRepair from "./pages/EmergencyRepair";
import HomeRepair from "./pages/HomeRepair";
import CorporateRepair from "./pages/CorporateRepair";
import PriceList from "./pages/PriceList";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/repair-types" element={<RepairTypes />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          
          {/* Service Pages */}
          <Route path="/screen-repair" element={<ScreenRepair />} />
          <Route path="/battery-replacement" element={<BatteryReplacement />} />
          <Route path="/water-damage" element={<WaterDamage />} />
          <Route path="/software-repair" element={<SoftwareRepair />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/camera-repair" element={<CameraRepair />} />
          <Route path="/speaker-repair" element={<SpeakerRepair />} />
          <Route path="/charging-port" element={<ChargingPort />} />
          <Route path="/button-repair" element={<ButtonRepair />} />
          <Route path="/case-replacement" element={<CaseReplacement />} />
          <Route path="/micropayka-repair" element={<MicropaykaRepair />} />
          <Route path="/motherboard-repair" element={<MotherboardRepair />} />
          
          {/* Brand Pages */}
          <Route path="/iphone-repair" element={<IPhoneRepair />} />
          <Route path="/samsung-repair" element={<SamsungRepair />} />
          <Route path="/xiaomi-repair" element={<XiaomiRepair />} />
          <Route path="/huawei-repair" element={<HuaweiRepair />} />
          <Route path="/oneplus-repair" element={<OnePlusRepair />} />
          <Route path="/google-pixel-repair" element={<GooglePixelRepair />} />
          <Route path="/sony-repair" element={<SonyRepair />} />
          
          {/* Special Services */}
          <Route path="/express-repair" element={<ExpressRepair />} />
          <Route path="/emergency-repair" element={<EmergencyRepair />} />
          <Route path="/home-repair" element={<HomeRepair />} />
          <Route path="/corporate-repair" element={<CorporateRepair />} />
          <Route path="/price-list" element={<PriceList />} />
          <Route path="/reviews" element={<Reviews />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
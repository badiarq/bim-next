import { BasicLayout } from "@/components/layouts/basic-layout"
import { useLanguageContext } from '@/middleware';
import { Dictionary } from "@/interfaces";

export default function MapPage() {

  const t:Dictionary = useLanguageContext()[1];
  
  return (
    <BasicLayout
    title={`${t.appName} - ${t.map}`}
    description={`${t.openBIMPlatform} - ${t.buildingViewer} - ${t.insert3DModel}`}
    keywords={`BIM, ${t.BIMPlatform}, ${t.insert3DModel}, ${t.map}, BIM GIS`}
    >
        <div className="map">
            <h1>{`${t.map} - ${t.buildingViewer}`}</h1>
        </div>
    </BasicLayout>
  )
}

import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

import { useLanguageContext, useAppContext } from '@/middleware';
import { MapLayout } from "@/components/layouts"
import { Dictionary } from "@/interfaces";

export default function MapPage() {

  const router = useRouter();
  const [state, dispatch] = useAppContext();
  const canvasRef = useRef(null);

  const t:Dictionary = useLanguageContext()[1];

  useEffect(() => {
    const canvas = canvasRef.current;
    if(canvas && state.user) {
      dispatch({type: "START_MAP", payload: canvas});
    }

    return () => {
      dispatch({type: "REMOVE_MAP"});
    }

  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !state.user) {
      router.push('/login');
    }
  }, [router, state.user]);
  
  return (
    <MapLayout
    title={`${t.appName} - ${t.map}`}
    description={`${t.openBIMPlatform} - ${t.buildingViewer} - ${t.insert3DModel}`}
    keywords={`BIM, ${t.BIMPlatform}, ${t.insert3DModel}, ${t.map}, BIM GIS`}
    >
        <div className="map">
            <h1>{`${t.map} - ${t.buildingViewer}`}</h1>
        </div>
    </MapLayout>
  )
}

import { FC } from "react";
import Link from "next/link";
import { BasicLayout } from "@/components/layouts/basic-layout"

export default function MapPage() {

  return (
    <>
        <BasicLayout
        title='BIM-NEXT - Map'
        description='OPEN BIM Platform - Map Page - Insert building in a geolocated map'
        >
            <div className="map">
                <h1>Map Viewer Page</h1>
            </div>
        </BasicLayout>
    </>
  )
}

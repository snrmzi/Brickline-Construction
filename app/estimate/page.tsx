import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CostEstimator from "@/components/estimator/CostEstimator";

export const metadata: Metadata = {
  title: "Cost estimator",
  description:
    "Get a rough cost range for your build by project type, floor area, and finish level.",
};

export default function EstimatePage() {
  return (
    <>
      <PageHeader
        title="Cost estimator"
        intro="Get a quick price range before you talk to anyone. It takes about ten seconds."
      />
      <Container className="py-16">
        <CostEstimator />
      </Container>
    </>
  );
}

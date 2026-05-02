import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";

export default async function OnboardingPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  const initial =
    role === "specialist"
      ? ("specialist" as const)
      : role === "owner"
        ? ("owner" as const)
        : null;

  return <OnboardingFlow initialRole={initial} />;
}

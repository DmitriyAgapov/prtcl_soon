import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import {
  AppShell,
  AppShellHeader,
  AppShellMain, BackgroundImage, Flex,
  Group, Paper,
  Text,
  Title
} from "@mantine/core";
import { Logo } from "@/components/Icons/Icons";
import bg from "@/app/assets/images/bg.png"
export default function Home() {
  return (
    <AppShell header={{ height: 180 }} padding="md">
      <BackgroundImage
      src="images/bg.png"
      radius="sm"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "80%"
      }}
      >

      <AppShellHeader  className={"xxl:px-12 xxl:py-12 pt-7 sm:px-8"}  bg={'transparent'} style={{

        borderBottom: 0
      }}>
        <Flex className={"flex-col gap-5 lg:max-w-[664px] xl:max-w-[910px]"}>
          <Group flex={1} className={'flex flex-col leading-none sm:flex-row sm:order-none order-1'}  justify={"space-between"}>
            <Text className={"leading-none"} size={"sm"} color={"white"}> Your heath protocol</Text>
            <Text className={"hidden leading-none"} size={"sm"} color={"white"}>info@healthprtcl.com</Text></Group>
          <Group flex={1} className={'flex flex-col sm:flex-row leading-none'}  justify={"space-between"}>
            <Logo/>
            <Text className={"flex-col gap-sm text-[26px] md:text-[29px] leading-none sm:max-w-[50%]"} size={"sm"} style={{
            fontFamily: "var(--font-book)",
            fontSize: "29px"
          }} color={"white"}>Hyperbaric Medical Group</Text></Group>

        </Flex>
      </AppShellHeader>
      <AppShellMain   className={"xxl:px-12 xxl:py-12 flex"} >
        <Paper className={'mt-auto xxl:px-12 xxl:py-12 px-5 py-6 sm:p-8 md:max-w-[664px]  xl:max-w-[910px]'}  style={{
          boxShadow: "0px 30px 50px 0px #00000040",
          background: "#ffffff10",
          backdropFilter: "blur(40px)",
          border: "2px white solid",
          borderRadius: "40px",
        }}>
          <Title className={"text-[40px] sm:text-[70px]  xl:text-[100px] xs:max-w-[500px] xl:max-w-none"} order={1} style={{ color: "white", lineHeight: 1, fontWeight: "300" }}>
            Every breath, clinically supported
          </Title>
          <Text className="text-white font-normal text-[14px]  sm:text-[18px]  lg:text-[26px] mt-6 xxl:mt-[60px]">
            Hyperbaric oxygen therapy that helps you heal faster and feel stronger. FDA-cleared treatments, guided by doctors, and covered by insurance.
          </Text>
          <Title  className="mt-6 xxl:mt-[60px] sm:text-[40px] xl:text-[60px] text-[28px]" order={2} style={{
            color: "white",
            lineHeight: 1,
            fontWeight: "300"
          }}>
            Opening Soon
          </Title>
        </Paper>
      </AppShellMain>
      </BackgroundImage>
    </AppShell>
  );
}

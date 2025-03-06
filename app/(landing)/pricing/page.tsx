import React from "react";
import { Button } from "@/components/ui/button";

const Page = () => {
  interface PriceCardContentOptions {
    plan: string;
    price: string;
    item: string[];
  }

  const horizontalRuleStyles: string = "bg-[#d0d0d0] h-[1px] w-full";
  const priceCardContent: PriceCardContentOptions[] = [
    {
      plan: "Free Plan",
      price: "₦0/Mo",
      item: [
        "Track up to 50 items in stock.",
        "Basic sales and profit tracking.",
        "Offline mode with local storage.",
        "Single user (admin role only)",
      ],
    },
    {
      plan: "Pro Plan",
      price: "₦15,000/Mo",
      item: [
        "Unlimited items in stock.",
        "Export daily/weekly reports.",
        "3 users (admin + 2 staff)",
        "Priority email support.",
      ],
    },
    {
      plan: "Enterprise Plan",
      price: "₦55,000/Mo",
      item: [
        "Unlimited users and roles",
        "Bulk import/export for stock",
        "Compliance audits (GDPR)",
        "Dedicated account manager",
      ],
    },
  ];

  interface FeaturesSectionOptions {
    imageSource: string;
    title: string;
    text: string;
    bgColor: string;
  }

  const featuresSectionContent: FeaturesSectionOptions[] = [
    {
      imageSource: "/pricing/_ui-package.svg",
      title: "Track Stock Effortlessly",
      text: "Add, edit, and search items by name. View real-time stock levels and low-stock alerts.",
      bgColor: "rgba(151,71,255,0.1)",
    },
    {
      imageSource: "/pricing/cash.svg",
      title: "Smart Sales Insights",
      text: "Record sales transactions instantly. Toggle between “show sales” and “show profits” views.",
      bgColor: "rgba(251,156,42,0.1)",
    },
    {
      imageSource: "/pricing/_ui-sale-04.svg",
      title: "Work Anywhere, Anytime",
      text: "Add stock and record sales without internet.Data syncs automatically when reconnected.",
      bgColor: "rgba(169,3,219,0.1)",
    },
    {
      imageSource: "/pricing/_ui-trend-up-01.svg",
      title: "Data-Driven Decisions",
      text: "Generate daily/weekly sales and profit reports. Export to CSV/PDF with one click",
      bgColor: "rgba(132,188,46,0.1)",
    },
    {
      imageSource: "/pricing/_ui-users-01.svg",
      title: "Collaborate Securely",
      text: "Full access to settings, reports, and tax configurations between Admin and Users",
      bgColor: "rgba(205,33,64,0.1)",
    },
    {
      imageSource: "/pricing/_ui-bell-ringing-02.svg",
      title: " Low Stock Alerts",
      text: "Get instant notifications when inventory levels drop below a set threshold, ensuring you restock on time",
      bgColor: "rgba(204,235,219,1)",
    },
  ];

  return (
    <main>
      <section className="w-full bg-[#fafafb] pt-[96px] flex flex-col items-center gap-[48px] px-2">
        <div className="flex flex-col gap-[24px] items-center p-2.5">
          <h2 className="font-[500] text-[36px] leading-[42px] md:text-[60px] md:leading-[120%] max-w-[30ch] text-center text-[#2a2a2a]">
            Simple, Transparent Pricing for Every Business
          </h2>
          <p className="text-center font-[400] text-[#717171] text-[18px] md:text-[20px] leading-[150%]">
            Choose a plan that fits your business needs. No hidden fees, cancel
            anytime.
          </p>
        </div>
        <div className="flex p-[10px] rounded-[16px] items-center bg-[#f1f1f1] w-[227px] h-[64px]">
          <Button
            className={`text-white bg-[#2a2a2a] border-[1px] border-[#1b1b1b] w-[102px] `}
          >
            Monthly
          </Button>
          <Button
            className={` h-[44px] text-[#2a2a2a] bg-transparent shadow-none hover:bg-transparent`}
          >
            Annually
          </Button>
        </div>

        <section className="w-full px-[10px] pt-[4px] pb-[64px] lg:px-4 lg:pb-[64px] lg:gap-[29px] flex flex-wrap justify-center gap-4 bg-white lg:bg-transparent">
          {priceCardContent.map(
            (cardContent: PriceCardContentOptions, index: number) => {
              return (
                <div
                  className="flex column items-center flex-col p-[32px] gap-[35px] bg-white rounded-[16px] border-[1px] border-[#dedede] w-[min(100%,351px)]"
                  key={index}
                >
                  <div className="flex flex-col gap-6 items-center *:font-[500] *:text-[#2a2a2a]">
                    <p className="bg-[#f1f1f1] rounded-[6px] p-2 flex justify-center items-center  text-[12px] leading-[16px] uppercase">
                      {cardContent.plan}
                    </p>
                    <p className="text-4xl leading-[56px]">
                      {cardContent.price}
                    </p>
                  </div>
                  <div className={`${horizontalRuleStyles}`}></div>
                  <div className="flex flex-col items-start gap-[16px]">
                    {cardContent.item.map((item: string, i: number) => (
                      <p
                        key={i}
                        className="text-[16px] leading-[24px] text-[#717171] flex gap-[10px]"
                      >
                        <span className="rounded-[4px] bg-[#009A49] flex items-center justify-center border-[1.4px] border-white h-[18px] w-[18px]">
                          <img
                            src="/pricing/tick.svg"
                            aria-hidden="true"
                            className="h-4 w-4"
                          />
                        </span>
                        <span className="text-[16px] leading-[20px] text-[#717171] text-center">
                          {item}
                        </span>
                      </p>
                    ))}
                  </div>
                  <div className={`${horizontalRuleStyles}`}></div>
                  <Button className="w-full py-[10px] px-[18px] rounded-[8px] border-[1px] border-[#1b1b1b] bg-[#2a2a2a] mt-auto">
                    Get Started
                  </Button>
                </div>
              );
            }
          )}
        </section>
      </section>

      <section className="bg-[#fafafb] lg:bg-white py-[64px] flex flex-col gap-[48px] mb-[40px]">
        <div className="flex flex-col gap-[20px] px-[32px] items-center">
          <p className="py-2 px-4 rounded-[24px] md:bg-[rgba(0,154,73,0.05)] text-[#009A49] font-[500] text-[16px] leading-[24px]">
            Features
          </p>
          <h3 className="font-[500] text-[36px] leading-[44px] text-[#2a2a2a] tracking-[-0.02em] text-center">
            Unlock Effortless Shop Management
          </h3>
          <p className="text-[#717171] text-[20px] leading-[30px] font-[450] text-center max-w-prose">
            Track inventory in real-time, monitor multi-currency sales, and
            generate actionable reports—all while working offline. ShopDesk
            simplifies your retail operations, so you can focus on growing your
            business
          </p>
        </div>
        <div className="px-4 gap-[40px] flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-[32px] md:gap-y-[64px] md:px-[32px]">
          {featuresSectionContent.map(
            (content: FeaturesSectionOptions, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-[20px]"
                >
                  <div
                    className="flex items-center justify-center h-[48px] w-[48px] rounded-[8px]"
                    style={{ backgroundColor: content.bgColor }}
                  >
                    <img
                      src={content.imageSource}
                      alt="icon"
                      className="h-[24px] w-[24px]"
                    />
                  </div>

                  <p className="text-[#2a2a2a] text-[20px] leading-[30px] font-[500] text-center">
                    {content.title}
                  </p>

                  <p className="text-[#717171] text-[16px] leading-[24px] font-[450] text-center max-w-[40ch]">
                    {content.text}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;

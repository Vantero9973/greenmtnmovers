"use client";
import { Footer } from "flowbite-react";
import { BsFacebook, BsYelp } from "react-icons/bs";
import { SiThumbtack } from "react-icons/si";
import { cities } from "../app/data/cities";

export default function FooterComponent() {
  const formattedCityName = (city) => city.toLowerCase().replace(/\s+/g, "-");

  return (
    <Footer className="bg-[#f7f7f7]">
      <div className="w-full">
        <div className="flex justify-center items-center">
          <div className="max-w-screen-xl grid w-full grid-cols-2 gap-8 px-6 pt-8 pb-16 md:grid-cols-5">
            <div className="max-md:col-span-2 text-[#6b7280] text-sm leading-5">
              <Footer.Title title="Contact" />
              <h3>Green Mountain Movers</h3>
              <p>Lakewood, CO</p>
              <a href="tel:7196801538">(719) 680-1538</a>
            </div>
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                {/* <Footer.Link href="/about">About</Footer.Link> */}
                <Footer.Link href="/contact">Contact</Footer.Link>
                <Footer.Link href="/careers">Careers</Footer.Link>
                <Footer.Link href="/blog">Blog</Footer.Link>
                <Footer.Link href="/moving-checklist">
                  Moving Checklist
                </Footer.Link>
                <Footer.Link href="/faq">FAQ</Footer.Link>
                <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
                <Footer.Link href="/terms">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Services" />
              <Footer.LinkGroup col>
                <Footer.Link href="/local-moving">Local Moving</Footer.Link>
                <Footer.Link href="/long-distance-moving">
                  Long-Distance Moving
                </Footer.Link>
                <Footer.Link href="/furniture-assembly">
                  Furniture Assembly
                </Footer.Link>
                <Footer.Link href="/junk-hauling">Junk Hauling</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Service Areas" />
              <Footer.LinkGroup col>
                {cities.slice(0, 24).map((city) => {
                  return (
                    <Footer.Link
                      href={`/service-areas/${formattedCityName(city)}`}
                      key={city}
                    >
                      {city}
                    </Footer.Link>
                  );
                })}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Service Areas"
                className="text-[transparent]"
              />
              <Footer.LinkGroup col>
                {cities.slice(24, 48).map((city) => {
                  return (
                    <Footer.Link
                      href={`/service-areas/${formattedCityName(city)}`}
                      key={city}
                    >
                      {city}
                    </Footer.Link>
                  );
                })}
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white">
          <div className="max-w-screen-xl w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              by="Green Mountain Movers™"
              href="/"
              year={2021}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://www.facebook.com/people/Green-Mountain-Movers/61550499921728/"
                target="_blank"
                rel="noopener noreferrer"
                icon={BsFacebook}
              />
              <Footer.Icon
                href="https://www.yelp.com/biz/green-mountain-movers-lakewood"
                target="_blank"
                rel="noopener noreferrer"
                icon={BsYelp}
              />
              <Footer.Icon
                href="https://www.thumbtack.com/co/denver/movers/green-mountain-movers/service/420816093781598234"
                target="_blank"
                rel="noopener noreferrer"
                icon={SiThumbtack}
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}


import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function UgrataraTempleWebsite() {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      title: "Shree Shree Ugratara Devalaya",
      description: "An ancient temple and cultural organization in Guwahati, Assam.",
      history: "The temple dates back centuries and is revered as a powerful Shakti Peetha. It plays a vital role in preserving Assamese spiritual heritage.",
      events: "Events Calendar",
      contributions: "Contribute to the Temple",
      donate: "Donate Now",
      bankTransfer: "Bank Transfer",
      upi: "Scan the UPI QR Code to Donate",
    },
    hi: {
      title: "श्री श्री उग्रतारा देवालय",
      description: "गुवाहाटी, असम में एक प्राचीन मंदिर और सांस्कृतिक संगठन।",
      history: "यह मंदिर सदियों पुराना है और एक शक्तिशाली शक्ति पीठ के रूप में पूजनीय है। यह असमिया आध्यात्मिक विरासत को संरक्षित करने में महत्वपूर्ण भूमिका निभाता है।",
      events: "इवेंट कैलेंडर",
      contributions: "मंदिर को योगदान दें",
      donate: "अब दान करें",
      bankTransfer: "बैंक ट्रांसफर",
      upi: "डोनेट करने के लिए UPI क्यूआर कोड स्कैन करें",
    },
    as: {
      title: "শ্রী শ্রী উগ্ৰতারা দেৱালয়",
      description: "গুৱাহাটী, অসমৰ এক প্ৰাচীন মন্দিৰ আৰু সাংস্কৃতিক সংস্থা।",
      history: "এই মন্দিৰটি শতাব্দীৰ পুৰণি আৰু শক্তিশালী শক্তি পীঠ হিচাপে পূজিত। ই অসমৰ আধ্যাত্মিক ঐতিহ্য সংৰক্ষণত গুৰুত্বপূর্ণ ভূমিকা পালন কৰে।",
      events: "ঘটনাৰ কেলেণ্ডাৰ",
      contributions: "মন্দিৰলৈ অৱদান দিয়ক",
      donate: "দান কৰক",
      bankTransfer: "বেংক স্থানান্তৰ",
      upi: "দানৰ বাবে UPI QR ক'ড স্কেন কৰক",
    }
  };

  const t = translations[language];

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-end space-x-2">
        <Button onClick={() => setLanguage("en")}>English</Button>
        <Button onClick={() => setLanguage("hi")}>हिन्दी</Button>
        <Button onClick={() => setLanguage("as")}>অসমীয়া</Button>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
        <p className="text-lg mb-4">{t.description}</p>
        <img src="/main-image.jpg" alt="Temple" className="mx-auto rounded-xl shadow-lg" />
        <p className="mt-4 text-md text-justify">{t.history}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">{t.events}</h2>
        <Card>
          <CardContent className="space-y-2 p-4">
            <Input placeholder="Event Title" />
            <Input type="date" />
            <Textarea placeholder="Event Description" />
            <Input type="file" />
            <Button>Add Event</Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">{t.contributions}</h2>
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium">{t.bankTransfer}</h3>
            <p>Account Name: Shree Shree Ugratara Devalaya</p>
            <p>Account Number: 1234567890</p>
            <p>IFSC Code: ABCD0123456</p>

            <h3 className="font-medium mt-4">{t.upi}</h3>
            <img src="/upi-qr.png" alt="UPI QR Code" className="w-40 h-40" />
            <Button className="mt-2">{t.donate}</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AIAssistantButton } from "./components/AIAssistant";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 dark:bg-[#161513] dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
      </main>

      {/* AI Assistant Trigger Button */}
      <AIAssistantButton
        label="Ask me"
        onClick={() => {
          // Ready to connect to your AI chat modal/drawer!
          console.log("AI Assistant opened");
        }}
      />
    </div>
  );
}

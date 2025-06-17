import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Car, 
  Zap, 
  Leaf, 
  Sun, 
  Wind, 
  Battery, 
  Gauge, 
  Shield, 
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import heroImage from './assets/2vKGURYA2Tm6.jpg'
import solarCarImage from './assets/cQfLdLPvPVb9.jpg'
import futureCarImage from './assets/mTk7qSmVbKbA.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'technology', 'features', 'gallery', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">TRILLION FSRV</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'technology', 'features', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['hero', 'about', 'technology', 'features', 'gallery', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white capitalize"
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <img 
          src={heroImage} 
          alt="Self-recharging electric vehicle" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            TRILLION FSRV
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-4 animate-fade-in-up">
            The Future of Self-Recharging Electric Vehicles
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Revolutionary automotive technology that charges itself while you drive. 
            Experience unlimited range with our breakthrough self-recharging system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => scrollToSection('technology')}
            >
              Discover the Technology
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Request Demo
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About TRILLION FSRV</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the next evolution in electric vehicle technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Our Story</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                TRILLION FSRV represents the next evolution in electric vehicle technology. Founded by 
                visionary engineers and automotive experts, we have developed the world's first truly 
                self-recharging electric vehicle system.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our breakthrough technology eliminates range anxiety and charging infrastructure 
                limitations, making electric vehicles more practical and accessible than ever before.
              </p>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                  Innovation
                </Badge>
                <Badge variant="secondary" className="bg-green-600/20 text-green-300">
                  Sustainability
                </Badge>
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                  Future-Ready
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src={solarCarImage} 
                alt="Solar-powered vehicle technology" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Self-Recharging Technology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple energy harvesting systems working in perfect harmony
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader className="text-center">
                <Sun className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-white">Solar Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Advanced photovoltaic cells seamlessly integrated into the vehicle's surface
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Regenerative Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Enhanced energy recovery from braking and kinetic movement
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader className="text-center">
                <Battery className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">Thermoelectric</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Heat-to-electricity conversion from vehicle operation
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader className="text-center">
                <Wind className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Wind Harvesting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Aerodynamic elements that capture wind energy during motion
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 border border-blue-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Technical Specifications</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-white font-medium">Miles per day</div>
                <div className="text-gray-400 text-sm">Self-charging capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">400+</div>
                <div className="text-white font-medium">Miles total range</div>
                <div className="text-gray-400 text-sm">On full charge</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3.5s</div>
                <div className="text-white font-medium">0-60 mph</div>
                <div className="text-gray-400 text-sm">Acceleration time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technology meets luxury and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader>
                <Car className="h-8 w-8 text-blue-400 mb-2" />
                <CardTitle className="text-white">Unlimited Daily Driving</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Self-recharging system provides enough energy for daily commuting without plugging in
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader>
                <Shield className="h-8 w-8 text-green-400 mb-2" />
                <CardTitle className="text-white">Advanced Autopilot</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  State-of-the-art autonomous driving with continuous over-the-air updates
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader>
                <Star className="h-8 w-8 text-yellow-400 mb-2" />
                <CardTitle className="text-white">Luxury Interior</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Premium materials, spacious cabin, and cutting-edge infotainment system
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader>
                <Gauge className="h-8 w-8 text-red-400 mb-2" />
                <CardTitle className="text-white">All-Weather Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Advanced all-wheel drive system optimized for any driving condition
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader>
                <Zap className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Smart Energy Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  AI-powered system optimizes energy usage based on driving patterns
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-400 mb-2" />
                <CardTitle className="text-white">Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Zero emissions with reduced charging infrastructure dependence
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Gallery</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the future of transportation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={futureCarImage} 
                alt="Future vehicle design" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Futuristic Design</h4>
                  <p className="text-sm text-gray-300">Aerodynamic excellence</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={solarCarImage} 
                alt="Solar integration technology" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Solar Integration</h4>
                  <p className="text-sm text-gray-300">Seamless energy capture</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={heroImage} 
                alt="Self-recharging vehicle" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Self-Recharging Tech</h4>
                  <p className="text-sm text-gray-300">Revolutionary innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to experience the future of electric vehicles?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">TRILLION FSRV Innovation Center</div>
                    <div className="text-gray-300">123 Future Drive, Tech Valley, CA 94000</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div className="text-gray-300">(555) 123-FSRV</div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div className="text-gray-300">info@trillionfsrv.com</div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-white mb-4">Business Hours</h4>
                <div className="text-gray-300 space-y-1">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM PST</div>
                  <div>Saturday: 10:00 AM - 4:00 PM PST</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white">Send us a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">First Name</label>
                    <Input placeholder="John" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your interest in TRILLION FSRV..." 
                    className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold text-white">TRILLION FSRV</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 TRILLION FSRV. All rights reserved.</p>
              <p className="text-sm mt-1">Revolutionizing transportation through self-recharging technology</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


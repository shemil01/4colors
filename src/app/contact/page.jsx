// 'use client'

// import { useState } from "react";
// // import { Helmet } from "react-helmet-async";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

// import { Phone, Mail, MapPin, Clock } from "lucide-react";


// export default function Contact() {
//   const { toast } = useToast();
// //   const queryClient = useQueryClient();
  
// //   const form = useForm<InquiryForm>({
// //     resolver: zodResolver(insertInquirySchema),
// //     defaultValues: {
// //       name: "",
// //       email: "",
// //       company: "",
// //       phone: "",
// //       productType: "",
// //       message: "",
// //     },
// //   });

// //   const submitInquiry = useMutation({
// //     mutationFn: async (data: InquiryForm) => {
// //       const response = await apiRequest("POST", "/api/inquiries", data);
// //       return response.json();
// //     },
// //     onSuccess: () => {
// //       toast({
// //         title: "Inquiry Submitted Successfully",
// //         description: "We'll get back to you within 24 hours.",
// //       });
// //       form.reset();
// //       queryClient.invalidateQueries({ queryKey: ['/api/inquiries'] });
// //     },
// //     onError: (error: Error) => {
// //       toast({
// //         title: "Submission Failed",
// //         description: error.message,
// //         variant: "destructive",
// //       });
// //     },
// //   });

// //   const onSubmit = (data: InquiryForm) => {
// //     submitInquiry.mutate(data);
// //   };

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Phone",
//       value: "+974 3078 1234",
//       link: "tel:+97430781234"
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       value: "info@fourcolours.qa",
//       link: "mailto:info@fourcolours.qa"
//     },
//     {
//       icon: MapPin,
//       title: "Address",
//       value: "Al Sadd Street, Doha, Qatar",
//       link: "#"
//     },
//   ];

//   const businessHours = [
//     { day: "Sunday - Thursday", hours: "8:00 AM - 6:00 PM" },
//     { day: "Friday", hours: "2:00 PM - 6:00 PM" },
//     { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
//   ];

//   return (
//     <>
//       {/* <Helmet>
//         <title>Contact Four Colours - Get Quote for Premium Printing Solutions</title>
//         <meta name="description" content="Contact Four Colours for premium printing solutions across the GCC. Request quotes, schedule consultations, and get 24/7 support in Qatar, UAE, Saudi Arabia." />
//       </Helmet> */}

//       {/* Hero Section */}
//       <section className="bg-gradient-to-b from-[#133661] to-[#07192b] text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <Badge className="bg-brand-gold text-brand-navy mb-6" data-testid="badge-contact-hero">
//               📞 Get in Touch
//             </Badge>
//             <h1 className="text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-contact">
//               Ready to Upgrade Your
//               <span className="text-brand-gold block">Printing Solutions?</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Our experts are here to help you find the perfect printing products and services 
//               for your business needs. Get personalized recommendations today.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form & Info */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Contact Information */}
//             <div>
//               <h2 className="text-4xl font-bold text-brand-navy mb-6" data-testid="heading-contact-info">
//                 Get in Touch
//               </h2>
//               <p className="text-xl text-brand-gray mb-8">
//                 Ready to experience premium printing excellence? Our team is standing by 
//                 to provide expert guidance and personalized solutions.
//               </p>
              
//               <div className="space-y-6 mb-12">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
//                     <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center">
//                       <info.icon className="w-6 h-6 text-brand-navy" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-brand-navy">{info.title}</h3>
//                       <a 
//                         href={info.link} 
//                         className="text-brand-gray hover:text-brand-gold transition-colors"
//                       >
//                         {info.value}
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Business Hours */}
//               <Card className="bg-brand-navy text-white">
//                 <CardHeader>
//                   <CardTitle className="flex items-center text-brand-gold">
//                     <Clock className="w-5 h-5 mr-2" />
//                     Business Hours
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-2">
//                     {businessHours.map((schedule, index) => (
//                       <div key={index} className="flex justify-between text-sm" data-testid={`hours-${index}`}>
//                         <span>{schedule.day}</span>
//                         <span>{schedule.hours}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
            
//             {/* Contact Form */}
//             <Card className="shadow-xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl text-brand-navy" data-testid="form-title">
//                   Request a Quote
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Form
//                 //  {...form}
//                 >
//                   <form 
//                 //   onSubmit={form.handleSubmit(onSubmit)} 
//                   className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <FormField
//                         // control={form.control}
//                         name="name"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Full Name *</FormLabel>
//                             <FormControl>
//                               <Input 
//                                 placeholder="Ahmed Al-Khalifa" 
//                                 // {...field} 
//                                 data-testid="input-name"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
                      
//                       <FormField
//                         // control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Email Address *</FormLabel>
//                             <FormControl>
//                               <Input 
//                                 type="email" 
//                                 placeholder="ahmed@company.com" 
//                                 {...field} 
//                                 data-testid="input-email"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>
                    
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <FormField
//                         control={form.control}
//                         name="company"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Company Name</FormLabel>
//                             <FormControl>
//                               <Input 
//                                 placeholder="Al-Rayan Corporation" 
//                                 {...field}
//                                 value={field.value || ""}
//                                 data-testid="input-company"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
                      
//                       <FormField
//                         control={form.control}
//                         name="phone"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Phone Number</FormLabel>
//                             <FormControl>
//                               <Input 
//                                 placeholder="+974 XXXX XXXX" 
//                                 {...field}
//                                 value={field.value || ""}
//                                 data-testid="input-phone"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </div>
                    
//                     <FormField
//                       control={form.control}
//                       name="productType"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Product Interest</FormLabel>
//                           <Select onValueChange={field.onChange} value={field.value || ""}>
//                             <FormControl>
//                               <SelectTrigger data-testid="select-product-type">
//                                 <SelectValue placeholder="Select Category" />
//                               </SelectTrigger>
//                             </FormControl>
//                             <SelectContent>
//                               <SelectItem value="ink-cartridges">Ink Cartridges</SelectItem>
//                               <SelectItem value="toner-cartridges">Toner Cartridges</SelectItem>
//                               <SelectItem value="ink-bottles">Ink Bottles</SelectItem>
//                               <SelectItem value="printers">Printers</SelectItem>
//                               <SelectItem value="accessories">Accessories</SelectItem>
//                               <SelectItem value="managed-services">Managed Services</SelectItem>
//                               <SelectItem value="other">Other</SelectItem>
//                             </SelectContent>
//                           </Select>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
                    
//                     <FormField
//                       control={form.control}
//                       name="message"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Message *</FormLabel>
//                           <FormControl>
//                             <Textarea 
//                               rows={4} 
//                               placeholder="Tell us about your printing requirements..."
//                               {...field} 
//                               data-testid="textarea-message"
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
                    
//                     <Button 
//                       type="submit" 
//                       className="w-full bg-brand-gold hover:bg-brand-light-gold text-brand-navy font-semibold text-lg py-3"
//                       disabled={submitInquiry.isPending}
//                       data-testid="button-submit"
//                     >
//                       {submitInquiry.isPending ? "Sending..." : "Send Quote Request"}
//                     </Button>
//                   </form>
//                 </Form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Map or Additional Info Section */}
//       <section className="py-20 bg-brand-light-gray">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-brand-navy mb-6" data-testid="heading-locations">
//             Serving the Entire GCC Region
//           </h2>
//           <p className="text-xl text-brand-gray mb-12 max-w-3xl mx-auto">
//             With strategic partnerships and distribution networks across the Gulf states, 
//             we provide seamless service from Qatar to the UAE, Saudi Arabia, Kuwait, Bahrain, and Oman.
//           </p>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { country: "Qatar", city: "Doha", phone: "+974 3078 1234" },
//               { country: "UAE", city: "Dubai", phone: "+971 4 XXX XXXX" },
//               { country: "Saudi Arabia", city: "Riyadh", phone: "+966 11 XXX XXXX" },
//             ].map((location, index) => (
//               <Card key={index} className="p-6" data-testid={`location-${index}`}>
//                 <CardContent className="p-0 text-center">
//                   <h3 className="text-xl font-bold text-brand-navy mb-2">{location.country}</h3>
//                   <p className="text-brand-gray mb-2">{location.city}</p>
//                   <p className="text-brand-gold font-semibold">{location.phone}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

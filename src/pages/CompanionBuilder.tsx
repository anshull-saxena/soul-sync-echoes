
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  personalityOptions, 
  interestOptions, 
  hairColors, 
  hairStyles, 
  eyeColors, 
  styleOptions, 
  demoAvatars 
} from "../data/companion-data";
import { Companion, CompanionInterest, CompanionPersonality } from "../types/companion";
import { useCompanion } from "../contexts/CompanionContext";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  gender: z.enum(["female", "male", "non-binary"]),
  personalityType: z.string(),
  hairColor: z.string(),
  hairStyle: z.string(),
  eyeColor: z.string(),
  style: z.string(),
  description: z.string().optional(),
  interests: z.array(z.string()).min(1, { message: "Select at least 1 interest" }),
  avatarUrl: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const CompanionBuilder: React.FC = () => {
  const navigate = useNavigate();
  const { addCompanion } = useCompanion();
  const [selectedGender, setSelectedGender] = useState<string>("female");
  const [selectedPersonality, setSelectedPersonality] = useState<CompanionPersonality>(personalityOptions[0]);
  const [selectedAvatarUrl, setSelectedAvatarUrl] = useState<string>(demoAvatars.female[0]);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gender: "female",
      personalityType: personalityOptions[0].id,
      hairColor: hairColors[0].id,
      hairStyle: hairStyles[0].id,
      eyeColor: eyeColors[0].id,
      style: styleOptions[0].id,
      description: "",
      interests: [],
      avatarUrl: demoAvatars.female[0],
    },
  });

  const onSubmit = (values: FormValues) => {
    const selectedInterests: CompanionInterest[] = values.interests.map(interestId => {
      const interest = interestOptions.find(i => i.id === interestId);
      return interest || { id: interestId, name: interestId, category: "Other" };
    });

    const newCompanion: Companion = {
      id: `companion-${Date.now()}`,
      name: values.name,
      personality: selectedPersonality,
      appearance: {
        gender: values.gender,
        hairColor: values.hairColor,
        hairStyle: values.hairStyle,
        eyeColor: values.eyeColor,
        style: values.style,
        avatar: values.avatarUrl,
      },
      interests: selectedInterests,
      createdAt: new Date(),
      description: values.description || `Hi, I'm ${values.name}. I'm excited to get to know you!`,
    };

    addCompanion(newCompanion);
    navigate("/chat");
  };

  const handleGenderChange = (value: string) => {
    if (value === "female" || value === "male" || value === "non-binary") {
      setSelectedGender(value);
      setSelectedAvatarUrl(demoAvatars[value][0]);
      form.setValue("gender", value);
      form.setValue("avatarUrl", demoAvatars[value][0]);
    }
  };

  const handlePersonalityChange = (personalityId: string) => {
    const personality = personalityOptions.find(p => p.id === personalityId);
    if (personality) {
      setSelectedPersonality(personality);
      form.setValue("personalityType", personality.id);
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Your AI Companion</h1>
      
      <div className="max-w-3xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Tabs defaultValue="basics" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="basics">Basics</TabsTrigger>
                <TabsTrigger value="personality">Personality</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basics" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter a name for your companion" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={(value) => handleGenderChange(value)}
                                defaultValue={field.value}
                                className="flex space-x-4"
                              >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="female" />
                                  </FormControl>
                                  <FormLabel className="font-normal">Female</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="male" />
                                  </FormControl>
                                  <FormLabel className="font-normal">Male</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="non-binary" />
                                  </FormControl>
                                  <FormLabel className="font-normal">Non-binary</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bio (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Add a short biography for your companion..."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="personality" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <FormField
                        control={form.control}
                        name="personalityType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Personality Type</FormLabel>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                              {personalityOptions.map((personality) => (
                                <div 
                                  key={personality.id}
                                  onClick={() => handlePersonalityChange(personality.id)}
                                  className={`cursor-pointer rounded-lg border p-4 hover:border-primary transition-colors ${
                                    field.value === personality.id ? 'border-primary bg-primary/5' : ''
                                  }`}
                                >
                                  <h3 className="font-medium">{personality.name}</h3>
                                  <p className="text-sm text-muted-foreground mt-1">{personality.description}</p>
                                </div>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="interests"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel>Interests & Hobbies</FormLabel>
                              <p className="text-sm text-muted-foreground">
                                Select at least one interest
                              </p>
                            </div>
                            
                            {Object.entries(
                              interestOptions.reduce((acc: { [key: string]: typeof interestOptions }, curr) => {
                                if (!acc[curr.category]) acc[curr.category] = [];
                                acc[curr.category].push(curr);
                                return acc;
                              }, {})
                            ).map(([category, interests]) => (
                              <div key={category} className="mb-6">
                                <h4 className="font-medium mb-2">{category}</h4>
                                <div className="grid grid-cols-2 gap-2">
                                  {(interests as typeof interestOptions).map((interest) => (
                                    <FormField
                                      key={interest.id}
                                      control={form.control}
                                      name="interests"
                                      render={({ field }) => {
                                        return (
                                          <FormItem
                                            key={interest.id}
                                            className="flex flex-row items-start space-x-3 space-y-0"
                                          >
                                            <FormControl>
                                              <Checkbox
                                                checked={field.value?.includes(interest.id)}
                                                onCheckedChange={(checked) => {
                                                  return checked
                                                    ? field.onChange([...field.value, interest.id])
                                                    : field.onChange(
                                                        field.value?.filter(
                                                          (value) => value !== interest.id
                                                        )
                                                      )
                                                }}
                                              />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                              {interest.name}
                                            </FormLabel>
                                          </FormItem>
                                        )
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>
                            ))}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="appearance" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <FormField
                          control={form.control}
                          name="hairColor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Hair Color</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a hair color" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {hairColors.map(color => (
                                    <SelectItem key={color.id} value={color.id}>
                                      <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.value }}></div>
                                        {color.name}
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div>
                        <FormField
                          control={form.control}
                          name="hairStyle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Hair Style</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a hair style" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {hairStyles.map(style => (
                                    <SelectItem key={style.id} value={style.id}>{style.name}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div>
                        <FormField
                          control={form.control}
                          name="eyeColor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Eye Color</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select an eye color" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {eyeColors.map(color => (
                                    <SelectItem key={color.id} value={color.id}>
                                      <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.value }}></div>
                                        {color.name}
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div>
                        <FormField
                          control={form.control}
                          name="style"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Style/Fashion</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a style" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {styleOptions.map(style => (
                                    <SelectItem key={style.id} value={style.id}>{style.name}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <FormLabel>Avatar</FormLabel>
                      <FormField
                        control={form.control}
                        name="avatarUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="grid grid-cols-3 gap-4 mt-2">
                                {demoAvatars[selectedGender as keyof typeof demoAvatars].map((avatar, index) => (
                                  <div
                                    key={index}
                                    onClick={() => {
                                      setSelectedAvatarUrl(avatar);
                                      field.onChange(avatar);
                                    }}
                                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition ${
                                      selectedAvatarUrl === avatar ? "border-primary" : "border-transparent"
                                    }`}
                                  >
                                    <div className="aspect-square bg-muted flex items-center justify-center">
                                      <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                                        <span className="text-2xl">
                                          {index + 1}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Note: These are placeholder avatars. In the full version, custom avatar uploads or AI-generated images would be available.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit">
                Create Companion
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CompanionBuilder;

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChipLink } from "@/components/ui/chip-link"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ColorPicker } from "@/components/ui/color-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FilterSelect } from "@/components/ui/filter-select"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { Kbd } from "@/components/ui/kbd"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Spinner } from "@/components/ui/spinner"
import { SonnerDemo } from "./sonner-demo"
import { ComboboxDemo } from "./combobox-demo"
import { DropdownDemo } from "./dropdown-demo"
import { CommandDemo } from "./command-demo"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="flex flex-wrap items-start gap-3">
        {children}
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 max-w-5xl mx-auto space-y-12">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img src="/mascot.jpg" alt="Paperweight mascot" className="size-14 rounded-[6px]" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-mono">Paperweight</h1>
            <p className="text-muted-foreground mt-1">Component Library</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ColorPicker />
          <ThemeToggle />
        </div>
      </div>

      <Separator />

      {/* Typography */}
      <Section title="Typography">
        <div className="w-full prose prose-sm dark:prose-invert prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-secondary-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded-[3px] prose-code:text-xs max-w-none">
          <h1>Heading One</h1>
          <h2>Heading Two</h2>
          <h3>Heading Three</h3>
          <p>
            Body text rendered in <strong>Geist Sans</strong> at 13px base size.
            The design philosophy is ultra-dark, utilitarian, and data-dense — like
            a mission control dashboard. Every pixel serves a purpose.
          </p>
          <p>
            Links use the <a href="#">accent color</a> and inline code uses{" "}
            <code>monospace styling</code> for technical content. Lists maintain
            the same dense, readable rhythm:
          </p>
          <ul>
            <li>First item with some supporting detail</li>
            <li>Second item demonstrating list spacing</li>
            <li>Third item to show vertical rhythm</li>
          </ul>
          <blockquote>
            Blockquotes are styled with a subtle left border accent for callouts
            and important notes within documentation.
          </blockquote>
        </div>
      </Section>

      <Separator />

      {/* Buttons */}
      <Section title="Button">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Disabled</Button>
      </Section>

      {/* Chip Link */}
      <Section title="Chip Link">
        <ChipLink href="#">SMV</ChipLink>
        <ChipLink href="#">GOES-19</ChipLink>
        <ChipLink href="#">FIRMS</ChipLink>
      </Section>

      {/* Badge */}
      <Section title="Badge">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </Section>

      {/* Input */}
      <Section title="Input">
        <div className="w-64 space-y-2">
          <Label htmlFor="demo-input">Label</Label>
          <Input id="demo-input" placeholder="Type something..." />
        </div>
        <div className="w-64 space-y-2">
          <Label htmlFor="disabled-input">Disabled</Label>
          <Input id="disabled-input" placeholder="Disabled" disabled />
        </div>
      </Section>

      {/* Select */}
      <Section title="Select">
        <div className="w-48">
          <Select defaultValue="monitoring">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="monitoring">Monitoring</SelectItem>
              <SelectItem value="outlook">Outlook</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Section>

      {/* Filter Select */}
      <Section title="Filter Select">
        <FilterSelect
          options={[
            { value: "assessments", label: "Assessments" },
            { value: "detections", label: "Detections" },
            { value: "actions", label: "Actions" },
            { value: "thoughts", label: "Thoughts" },
          ]}
          defaultSelected={["assessments"]}
        />
      </Section>

      {/* Textarea */}
      <Section title="Textarea">
        <div className="w-80 space-y-2">
          <Label htmlFor="demo-textarea">Message</Label>
          <Textarea id="demo-textarea" placeholder="Write a message..." />
        </div>
      </Section>

      {/* Checkbox & Switch */}
      <Section title="Checkbox & Switch">
        <div className="flex items-center gap-2">
          <Checkbox id="check1" />
          <Label htmlFor="check1">Accept terms</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="check2" defaultChecked />
          <Label htmlFor="check2">Checked</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="switch1" />
          <Label htmlFor="switch1">Notifications</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="switch2" defaultChecked />
          <Label htmlFor="switch2">Enabled</Label>
        </div>
      </Section>

      {/* Avatar */}
      <Section title="Avatar">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>PW</AvatarFallback>
        </Avatar>
      </Section>

      {/* Card */}
      <Section title="Card">
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is the card content area. It can hold any content.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Metrics</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2,847</div>
            <p className="text-sm text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card variant="panel" className="w-80">
          <CardHeader>
            <CardTitle>Panel Card</CardTitle>
            <CardDescription>Sharp corners, dark body</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              The header above uses <code className="text-xs bg-muted px-1 py-0.5 rounded-[3px]">bg-surface</code> (#1a1a1a) while this body sits on <code className="text-xs bg-muted px-1 py-0.5 rounded-[3px]">bg-background</code> (#0a0a0a) — the true black.
            </p>
            <p className="text-sm text-muted-foreground">
              Ideal for sidebar sections and full-bleed panel layouts where you want maximum contrast between the header and content area.
            </p>
          </CardContent>
        </Card>
      </Section>


      {/* Tabs */}
      <Section title="Tabs">
        <Tabs defaultValue="overview" className="w-96">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-sm text-muted-foreground p-2">
            Overview content goes here.
          </TabsContent>
          <TabsContent value="analytics" className="text-sm text-muted-foreground p-2">
            Analytics content goes here.
          </TabsContent>
          <TabsContent value="settings" className="text-sm text-muted-foreground p-2">
            Settings content goes here.
          </TabsContent>
        </Tabs>
      </Section>

      {/* Table */}
      <Section title="Table">
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Alice Johnson</TableCell>
                <TableCell><Badge>Active</Badge></TableCell>
                <TableCell>Admin</TableCell>
                <TableCell className="text-right"><Button variant="ghost" size="sm">Edit</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bob Smith</TableCell>
                <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
                <TableCell>Member</TableCell>
                <TableCell className="text-right"><Button variant="ghost" size="sm">Edit</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Carol Davis</TableCell>
                <TableCell><Badge variant="outline">Inactive</Badge></TableCell>
                <TableCell>Viewer</TableCell>
                <TableCell className="text-right"><Button variant="ghost" size="sm">Edit</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Section>

      {/* Form Example */}
      <Section title="Form Example">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Create Resource</CardTitle>
            <CardDescription>Add a new resource to your operation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="CNC Mill #1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Input id="type" placeholder="Machine" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Optional notes..." />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="active" defaultChecked />
              <Label htmlFor="active">Active</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create</Button>
          </CardFooter>
        </Card>
      </Section>

      {/* Hover Card */}
      <Section title="Hover Card">
        <HoverCard>
          <HoverCardTrigger className="underline underline-offset-4 text-primary cursor-pointer">
            @paperweight
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Paperweight</h4>
              <p className="text-xs text-muted-foreground">
                Ultra-dark, utilitarian design system for ops dashboards.
              </p>
              <div className="flex items-center pt-1">
                <span className="text-xs text-muted-foreground">
                  Joined December 2024
                </span>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Section>

      {/* Kbd */}
      <Section title="Keyboard Shortcut">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to open command palette
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Kbd>Esc</Kbd> to close
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Kbd>Shift</Kbd> + <Kbd>Enter</Kbd> to submit
        </div>
      </Section>

      {/* Pagination */}
      <Section title="Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Section>

      {/* Progress */}
      <Section title="Progress">
        <div className="w-full max-w-md space-y-4">
          <Progress value={25} />
          <Progress value={60} />
          <Progress value={90} />
        </div>
      </Section>

      {/* Radio Group */}
      <Section title="Radio Group">
        <RadioGroup defaultValue="option-1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-1" id="option-1" />
            <Label htmlFor="option-1">Monitoring</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-2" id="option-2" />
            <Label htmlFor="option-2">Assessment</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-3" id="option-3" />
            <Label htmlFor="option-3">Archived</Label>
          </div>
        </RadioGroup>
      </Section>

      {/* Sonner/Toast */}
      <Section title="Toast (Sonner)">
        <SonnerDemo />
      </Section>

      {/* Combobox */}
      <Section title="Combobox">
        <ComboboxDemo />
      </Section>

      {/* Dropdown Menu */}
      <Section title="Dropdown Menu">
        <DropdownDemo />
      </Section>

      {/* Command */}
      <Section title="Command">
        <CommandDemo />
      </Section>

      {/* Spinner */}
      <Section title="Spinner">
        <div className="flex items-center gap-4">
          <Spinner />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </div>
      </Section>

      <Separator />
      <div className="space-y-2 pb-8">
        <p className="text-xs text-muted-foreground">Paperweight — v0.1</p>
        <p className="text-xs text-muted-foreground">
          Built on top of <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">shadcn/ui</a> · Made by <a href="https://github.com/justinm35" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">@justinm35</a>
        </p>
      </div>
    </div>
  )
}

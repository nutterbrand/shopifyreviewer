-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS company_id_seq;
CREATE SEQUENCE IF NOT EXISTS company_paid_shopping_id_seq;
CREATE SEQUENCE IF NOT EXISTS company_report_id_seq;
CREATE SEQUENCE IF NOT EXISTS company_lead_form_id_seq;
CREATE SEQUENCE IF NOT EXISTS company_billing_id_seq;
CREATE SEQUENCE IF NOT EXISTS company_keyword_rank_id_seq;

-- Table Definition public.company_affiliate
CREATE TABLE IF NOT EXISTS "public"."company_affiliate" (
    "id" INT PRIMARY KEY NOT NULL,
    "name" TEXT,
    "created_date" DATE DEFAULT CURRENT_DATE
);

-- Table Definition public.company
CREATE TABLE IF NOT EXISTS "public"."company" (
    "id" INT PRIMARY KEY NOT NULL DEFAULT nextval('company_id_seq'::regclass),
    "company_affiliate_id" INT,
    "name" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "created_date" DATE DEFAULT CURRENT_DATE,
    "domain" TEXT,
    "shopping_name" TEXT,
    "display_name" TEXT,
    "competitor_domains" TEXT,
    "sales_agent" TEXT,
    "referring_company" TEXT,
    "last_report_generated" DATE,
    "emails" TEXT,
    "people" TEXT,
    "facebook_link" TEXT,
    "instagram_link" TEXT,
    "linkedin_link" TEXT,
    "telephone" TEXT,
    "vertical" TEXT,
    "quantcast" TEXT,
    "alexa" TEXT,
    "majestic" TEXT,
    "umbrella" TEXT,
    FOREIGN KEY (company_affiliate_id) REFERENCES "public"."company_affiliate"(id)
);

-- Table Definition public.company_report
CREATE TABLE IF NOT EXISTS "public"."company_report" (
    "id" INT PRIMARY KEY NOT NULL DEFAULT nextval('company_report_id_seq'::regclass),
    "company_id" INT,
    "created_date" DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (company_id) REFERENCES "public"."company"(id)
);

-- Table Definition public.company_paid_shopping
CREATE TABLE IF NOT EXISTS "public"."company_paid_shopping" (
    "id" INT PRIMARY KEY NOT NULL DEFAULT nextval('company_paid_shopping_id_seq'::regclass),
    "report_id" INT,
    "company_id" INT,
    "created_date" DATE DEFAULT CURRENT_DATE,
    "position" TEXT,
    "title" TEXT,
    "link" TEXT,
    "domain" TEXT,
    "thumbnail" TEXT,
    "extensions" TEXT,
    "rating" TEXT,
    "reviews" TEXT,
    "keyword" TEXT,
    "extracted_price" FLOAT,
    FOREIGN KEY (report_id) REFERENCES "public"."company_report"(id),
    FOREIGN KEY (company_id) REFERENCES "public"."company"(id)
);

-- Table Definition public.company_billing
CREATE TABLE IF NOT EXISTS "public"."company_billing" (
    "id" INT PRIMARY KEY NOT NULL DEFAULT nextval('company_billing_id_seq'::regclass),
    "name" TEXT,
    "report_id" INT,
    "company_id" INT,
    "created_date" DATE DEFAULT CURRENT_DATE,
    "amount" TEXT,
    "email" TEXT,
    FOREIGN KEY (report_id) REFERENCES "public"."company_report"(id),
    FOREIGN KEY (company_id) REFERENCES "public"."company"(id)
);

-- Table Definition public.company_lead_form
CREATE TABLE IF NOT EXISTS "public"."company_lead_form" (
    "id" INT PRIMARY KEY NOT NULL DEFAULT nextval('company_lead_form_id_seq'::regclass),
    "company_id" INT,
    "company_affiliate_id" INT,
    "report_id" INT,
    "created_date" DATE DEFAULT CURRENT_DATE,
    "email" INT,
    FOREIGN KEY (report_id) REFERENCES "public"."company_report"(id),
    FOREIGN KEY (company_id) REFERENCES "public"."company"(id),
    FOREIGN KEY (company_affiliate_id) REFERENCES "public"."company_affiliate"(id)
);

-- Table Definition public.company_keyword_rank
CREATE TABLE IF NOT EXISTS "public"."company_keyword_rank" (
    "id" INT PRIMARY KEY NOT NULL DEFAULT nextval('company_keyword_rank_id_seq'::regclass),
    "company_id" INT,
    "report_id" INT,
    "created_date" DATE DEFAULT CURRENT_DATE,
    "keyword" TEXT,
    "domain" TEXT,
    "url" TEXT,
    "relative_url" TEXT,
    "type" TEXT,
    "rank_group" TEXT,
    "rank_absolute" TEXT,
    "title" TEXT,
    "link" TEXT,
    "snippet" TEXT,
    "location_code" TEXT,
    "language" TEXT,
    "estimated_paid_traffic_cost" FLOAT,
    "estimated_organic_traffic_volume" FLOAT,
    "estimated_paid_traffic_volume" FLOAT,
    "cpc" FLOAT,
    "search_volume" INT,
    "competition" FLOAT,
    "avg_pos" FLOAT,
    FOREIGN KEY (company_id) REFERENCES "public"."company"(id),
    FOREIGN KEY (report_id) REFERENCES "public"."company_report"(id),
    UNIQUE (company_id, report_id, keyword)
);

CREATE INDEX IF NOT EXISTS company_id_shopping ON "public"."company_paid_shopping"(company_id);
CREATE INDEX IF NOT EXISTS company_id_keywords ON "public"."company_keyword_rank"(company_id);



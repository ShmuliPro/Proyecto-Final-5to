--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.0

-- Started on 2024-12-09 11:46:36

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16400)
-- Name: visas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.visas (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    apellido character varying(50) NOT NULL,
    birth_date date NOT NULL,
    pasaporte character varying(20) NOT NULL,
    passport_issue_date date NOT NULL,
    lugar_emision character varying(100) NOT NULL,
    telefono character varying(15) NOT NULL,
    direccion character varying(200) NOT NULL,
    codigo_postal character varying(10) NOT NULL,
    email character varying(100) NOT NULL,
    social_media boolean NOT NULL,
    social_platform character varying(50),
    social_username character varying(50),
    current_job text,
    entidad_educativa character varying(100),
    titulo_obtener character varying(100),
    "año" integer
);


ALTER TABLE public.visas OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: visas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.visas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.visas_id_seq OWNER TO postgres;

--
-- TOC entry 4787 (class 0 OID 0)
-- Dependencies: 215
-- Name: visas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.visas_id_seq OWNED BY public.visas.id;


--
-- TOC entry 4634 (class 2604 OID 16403)
-- Name: visas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.visas ALTER COLUMN id SET DEFAULT nextval('public.visas_id_seq'::regclass);


--
-- TOC entry 4781 (class 0 OID 16400)
-- Dependencies: 216
-- Data for Name: visas; Type: TABLE DATA; Schema: public; Owner: postgres
--

-- COPY public.visas (id, nombre, apellido, birth_date, pasaporte, passport_issue_date, lugar_emision, telefono, direccion, codigo_postal, email, social_media, social_platform, social_username, current_job, entidad_educativa, titulo_obtener, "año") FROM stdin;
-- \.


--
-- TOC entry 4788 (class 0 OID 0)
-- Dependencies: 215
-- Name: visas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.visas_id_seq', 1, false);


--
-- TOC entry 4636 (class 2606 OID 16407)
-- Name: visas visas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.visas
    ADD CONSTRAINT visas_pkey PRIMARY KEY (id);


-- Completed on 2024-12-09 11:46:36

--
-- PostgreSQL database dump complete
--



INSERT INTO public.visas VALUES (3, 'Lucas', 'Gomez', '1990-12-05', '35343434', '2010-12-05', 'ARG', '+5491168789987', 'valentin gomez 1234', '1190', 'lucasgomez@gmail.com', false, NULL, NULL, 'Programador', 'ORT', 'Tecnico', 2024);

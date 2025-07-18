import {
  LangGraph,
  LangChain,
  LangSmith,
  LlamaIndex,
  OpenAI,
  Claude,
  Gemini,
  DeepSeek,
  Anthropic,
  Dalle,
  Qwen,
  HuggingFace,
} from '@lobehub/icons';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

export default function Projects() {
  return (
    <div>
      <section className='resume-section' id='projects'>
        <div className='resume-section-content projects'>
          <h2 className='mb-1'>Projects</h2>
          <div className='subheading mb-2'>AI Agents</div>
          <p>
            AI agents and assistants built using Function Calling and Direct
            Technology, like vector databases, embedding models &
            retrieval-augmented generation (RAG), to automate tasks, sell
            software, generate leads, analyze personal finances, write code,
            data visualizations and execute online marketing and social media
            campaigns.
          </p>
          <p className='lead'>Tech stack:</p>
          <ul className='list-inline dev-icons'>
            <li className='list-inline-item'>
              <img
                className='svg-inline--fa fa-js bg-dark rounded-sm'
                src='img/flowiseai-logo.webp'
              />
            </li>
            <li className='list-inline-item'>
              <LangChain className='svg-inline--fa' />
            </li>
            <li className='list-inline-item'>
              <LangGraph className='svg-inline--fa' />
            </li>
            <li className='list-inline-item'>
              <LangSmith className='svg-inline--fa' />
            </li>
            <li className='list-inline-item'>
              <LlamaIndex className='svg-inline--fa' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-node' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-js' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-python' />
            </li>
            <li className='list-inline-item'>
              <OpenAI className='svg-inline--fa fa-js fa-w-14' />
            </li>
            <li className='list-inline-item'>
              <Claude className='svg-inline--fa' />
            </li>
            <li className='list-inline-item'>
              <Gemini className='svg-inline--fa' />
            </li>
            <li className='list-inline-item'>
              <DeepSeek className='svg-inline--fa' />
            </li>
            <li className='list-inline-item'>
              <Anthropic className='svg-inline--fa' />
            </li>
            <li className='list-inline-item'>
              <Dalle className='svg-inline--fa' />
            </li>
            <li className='list-inline-item'>
              <Qwen className='svg-inline--fa' />
            </li>
            <li className='list-inline-item'>
              <HuggingFace className='svg-inline--fa' />
            </li>
          </ul>
          <div className='d-flex row  mb-5'>
            <div
              id='agent-gallery'
              className='card col-md-3 col-12 mx-2 mb-1'
              style={{ width: '14rem' }}
            >
              <Gallery withCaption>
                <Item
                  caption='Airline AI Assistant that talks to customers and generates images of destinations'
                  original='img/LLM-Engineer-Lab-Airline-AI-Assistant-Berlin-Image-Audio.jpg'
                  thumbnail='img/LLM-Engineer-Lab-Airline-AI-Assistant-Berlin-Image-Audio.jpg'
                  width='1234'
                  height='677'
                >
                  {({ ref, open }) => (
                    <img
                      id='first'
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-Airline-AI-Assistant-Berlin-Image-Audio.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Airline AI Assistant that talks to customers and generates images of destinations'
                  original='img/LLM-Engineer-Lab-Airline-AI-Assistant-London-Image-Audio.jpg'
                  thumbnail='img/LLM-Engineer-Lab-Airline-AI-Assistant-London-Image-Audio.jpg'
                  width='1503'
                  height='683'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-Airline-AI-Assistant-London-Image-Audio.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Airline AI Assistant that uses function calling to get ticket prices'
                  original='img/LLM-Engineer-Lab-Airline-AI-Assistant-Ticket-Prices-Tool.jpg'
                  thumbnail='img/LLM-Engineer-Lab-Airline-AI-Assistant-Ticket-Prices-Tool.jpg'
                  width='723'
                  height='1214'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-Airline-AI-Assistant-Ticket-Prices-Tool.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Airline AI Assistant that can take a customer through the entire booking and checkin process'
                  original='img/LLM-Engineer-Lab-Airline-AI-Assistant-Ticket-Book-Checkin-Tools.jpg'
                  thumbnail='img/LLM-Engineer-Lab-Airline-AI-Assistant-Ticket-Book-Checkin-Tools.jpg'
                  width='1229'
                  height='1207'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-Airline-AI-Assistant-Ticket-Book-Checkin-Tools.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='A UI that generates company brochures from a URL using Claude'
                  original='img/LLM-Engineer-Lab-Brochure-UI-Claude.jpg'
                  thumbnail='img/LLM-Engineer-Lab-Brochure-UI-Claude.jpg'
                  width='1502'
                  height='779'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-Brochure-UI-Claude.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Using LLMs to translate generated company brochures into different languages'
                  original='img/LLM-Engineer-Lab-Brochure-Spanish.jpg'
                  thumbnail='img/LLM-Engineer-Lab-Brochure-Spanish.jpg'
                  width='2560'
                  height='1440'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-Brochure-Spanish.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='A UI that optimizes code so it runs up to 65K faster'
                  original='img/LLM-Engineer-Lab-Code-Converter.jpg'
                  thumbnail='img/LLM-Engineer-Lab-Code-Converter.jpg'
                  width='1509'
                  height='1024'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-Code-Converter.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Deploy open-source models to the cloud with an API'
                  original='img/LLM-Engineer-Lab-HF-Qwen-Endpoint-Overview.jpg'
                  thumbnail='img/LLM-Engineer-Lab-HF-Qwen-Endpoint-Overview.jpg'
                  width='1506'
                  height='503'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-HF-Qwen-Endpoint-Overview.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Analytics on models running in the cloud'
                  original='img/LLM-Engineer-Lab-HF-Qwen-Endpoint-Analytics.jpg'
                  thumbnail='img/LLM-Engineer-Lab-HF-Qwen-Endpoint-Analytics.jpg'
                  width='1501'
                  height='1288'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-HF-Qwen-Endpoint-Analytics.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Options for running models in the cloud such as cloud provider, GPUs, memory, etc.'
                  original='img/LLM-Engineer-Lab-HF-Qwen-Endpoint-Settings.jpg'
                  thumbnail='img/LLM-Engineer-Lab-HF-Qwen-Endpoint-Settings.jpg'
                  width='1506'
                  height='848'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-HF-Qwen-Endpoint-Settings.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='A chatbot UI for a RAG expert knowledge worker using a vector database'
                  original='img/LLM-Engineer-Lab-Insurellm-RAG-Knowledge-Worker.jpg'
                  thumbnail='img/LLM-Engineer-Lab-Insurellm-RAG-Knowledge-Worker.jpg'
                  width='978'
                  height='928'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/LLM-Engineer-Lab-Insurellm-RAG-Knowledge-Worker.jpg'
                    />
                  )}
                </Item>
              </Gallery>
              <div className='card-body'>
                <h5 className='card-title'>LLM Engineering Lab</h5>
                <p>
                  Data scientist lab setup in Anaconda using JupyterLab to
                  experiment in creating AI agents in python using various Open
                  Source and Frontier LLM models. Projects include brochure
                  generation, language translation, function calling and
                  multi-modal techniques.
                </p>
                <a
                  href='https://github.com/jstoops/llm-engineer-lab'
                  target='_blank'
                  className='btn btn-primary'
                >
                  Github
                </a>
              </div>
            </div>
            <div
              id='agent-gallery'
              className='card col-md-3 col-12 mx-2 mb-1'
              style={{ width: '14rem' }}
            >
              <Gallery withCaption>
                <Item
                  caption='AI agentic framework for finding deals on products'
                  original='img/agent-workflow.jpg'
                  thumbnail='img/agent-workflow.jpg'
                  width='1814'
                  height='1004'
                >
                  {({ ref, open }) => (
                    <img
                      id='first'
                      ref={ref}
                      onClick={open}
                      src='img/agent-workflow.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Push notifications using Pushover'
                  original='img/Product_Pricer_Push_Notification.jpg'
                  thumbnail='img/Product_Pricer_Push_Notification.jpg'
                  width='432'
                  height='912'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Product_Pricer_Push_Notification.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Gradio UI'
                  original='img/Product_Pricer_Gradio_UI.jpg'
                  thumbnail='img/Product_Pricer_Gradio_UI.jpg'
                  width='1227'
                  height='553'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Product_Pricer_Gradio_UI.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='UI for ops team to monitor logs and navigate 3D visualization of RAG vectorstore'
                  original='img/Product_Pricer_Gradio_UI_Logging_3D_Vectorstore.jpg'
                  thumbnail='img/Product_Pricer_Gradio_UI_Logging_3D_Vectorstore.jpg'
                  width='1777'
                  height='397'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Product_Pricer_Gradio_UI_Logging_3D_Vectorstore.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='2D visualization of all 400,000 products in RAG vectorstore'
                  original='img/pricer-vectorstore-2d-visualization-400k.jpg'
                  thumbnail='img/pricer-vectorstore-2d-visualization-400k.jpg'
                  width='1816'
                  height='1123'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/pricer-vectorstore-2d-visualization-400k.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Monitoring fine tuning of open-source model in Weights & Biases AI developer platform'
                  original='img/Product-Pricer-Fine-Tuning-WandB-Job-Run.jpg'
                  thumbnail='img/Product-Pricer-Fine-Tuning-WandB-Job-Run.jpg'
                  width='1382'
                  height='632'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Product-Pricer-Fine-Tuning-WandB-Job-Run.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Distribution of prices predicted using fine-tuned Llama 3.1 8B with 4bit quantization'
                  original='img/Product-Pricer-Open-Source-LLM-Llama-3-1-8B-Fine-Tuned-4-Bit.jpg'
                  thumbnail='img/Product-Pricer-Open-Source-LLM-Llama-3-1-8B-Fine-Tuned-4-Bit.jpg'
                  width='1001'
                  height='696'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Product-Pricer-Open-Source-LLM-Llama-3-1-8B-Fine-Tuned-4-Bit.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Final results of fine-tuned open-source model compared to tradition ML and frontier models'
                  original='img/Product-Pricer-Model-Evaluation-Final-Results.jpg'
                  thumbnail='img/Product-Pricer-Model-Evaluation-Final-Results.jpg'
                  width='1237'
                  height='664'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Product-Pricer-Model-Evaluation-Final-Results.jpg'
                    />
                  )}
                </Item>
              </Gallery>
              <div className='card-body'>
                <h5 className='card-title'>Product Pricing Agent</h5>
                <p>
                  7 Agents collaborating in a custom AI Agentic framework:
                  GTP-4o identifies deals from RSS feed, fine-tuned model
                  estimates prices, a massive RAG vectorstore, messaging agent
                  sends push notifications, and planning agent to coordinate.
                </p>
                <a
                  href='https://github.com/jstoops/product-pricing-agent'
                  target='_blank'
                  className='btn btn-primary'
                >
                  Github
                </a>
              </div>
            </div>
            <div
              className='card col-md-3 col-12 mx-2 mb-1'
              style={{ width: '16rem' }}
            >
              <Gallery>
                <Item
                  original='img/AI-Voice-Assistant-Webcam-Desktop-Voice.webp'
                  thumbnail='img/AI-Voice-Assistant-Webcam-Desktop-Voice.webp'
                  width='1980'
                  height='1080'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/AI-Voice-Assistant-Webcam-Desktop-Voice.webp'
                    />
                  )}
                </Item>
              </Gallery>
              <div className='card-body'>
                <h5 className='card-title'>AI Voice Assistant</h5>
                <p>
                  Allows you to ask questions and get witty, concise answers
                  about what you're working on using multiple AI models to
                  convert text-to-speech, speech-to-text, and answer questions
                  using the images streamed from the webcam and desktop.
                </p>
                <a
                  href='https://github.com/jstoops/ai-voice-assistant'
                  target='_blank'
                  className='btn btn-primary'
                >
                  Github
                </a>
              </div>
            </div>
            <div
              id='agent-gallery'
              className='card col-md-3 col-12 mx-2 mb-1'
              style={{ width: '14rem' }}
            >
              <Gallery withCaption>
                <Item
                  original='img/Rental-Investment-Chatbot-3.jpg'
                  thumbnail='img/Rental-Investment-Chatbot-3.jpg'
                  width='1489'
                  height='1229'
                >
                  {({ ref, open }) => (
                    <img
                      id='first'
                      ref={ref}
                      onClick={open}
                      src='img/Rental-Investment-Chatbot-3.jpg'
                    />
                  )}
                </Item>
                <Item
                  original='img/Rental-Investment-Chatbot-2.jpg'
                  thumbnail='img/Rental-Investment-Chatbot-2.jpg'
                  width='907'
                  height='842'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Rental-Investment-Chatbot-2.jpg'
                    />
                  )}
                </Item>
                <Item
                  original='img/Rental-Investment-Chatbot-1.jpg'
                  thumbnail='img/Rental-Investment-Chatbot-1.jpg'
                  width='1696'
                  height='1070'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Rental-Investment-Chatbot-1.jpg'
                    />
                  )}
                </Item>
              </Gallery>
              <div className='card-body'>
                <h5 className='card-title'>
                  Rental Investment Chatbot AI Agent Chatbot
                </h5>
                <p>
                  This RAG chatbot uses a local LLM to embed a document on
                  rental investing in a vector database and then a conversation
                  QA chain to answer questions using it and embedded in
                  PropertyPulse.
                </p>
              </div>
            </div>
            <div
              className='card col-md-3 col-12 mx-2 mb-1'
              style={{ width: '16rem' }}
            >
              <Gallery>
                <Item
                  original='img/Blog-Standard-NextJS-OpenAI.jpg'
                  thumbnail='img/Blog-Standard-NextJS-OpenAI.jpg'
                  width='1980'
                  height='1080'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Blog-Standard-NextJS-OpenAI.jpg'
                    />
                  )}
                </Item>
              </Gallery>
              <div className='card-body'>
                <h5 className='card-title'>Blog Standard AI SaaS</h5>
                <p>
                  Next.js & Open AI / GPT apps using MongoDB, Auth0, & Stripe to
                  purchase tokens used to generate blog posts & SEO friendly
                  titles targeting keywords using OpenAI API.
                </p>
                <a
                  href='https://github.com/jstoops/blog-standard'
                  target='_blank'
                  className='btn btn-primary'
                >
                  Github
                </a>
              </div>
            </div>
            <div
              id='agent-gallery'
              className='card col-md-3 col-12 mx-2 mb-1'
              style={{ width: '14rem' }}
            >
              <Gallery withCaption>
                <Item
                  caption='Social Media Strategy AI Agent'
                  original='img/Social-AI-Agent.jpg'
                  thumbnail='img/Social-AI-Agent.jpg'
                  width='1639'
                  height='598'
                >
                  {({ ref, open }) => (
                    <img
                      id='first'
                      ref={ref}
                      onClick={open}
                      src='img/Social-AI-Agent.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Lead Generation AI Agent'
                  original='img/Search-Mail-AI-Agent.jpg'
                  thumbnail='img/Search-Mail-AI-Agent.jpg'
                  width='1224'
                  height='788'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Search-Mail-AI-Agent.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Prompt Engineering for Creating AI Agents'
                  original='img/Prompting-Team-AI-Agent.jpg'
                  thumbnail='img/Prompting-Team-AI-Agent.jpg'
                  width='1644'
                  height='748'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Prompting-Team-AI-Agent.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Expert RAG App AI Agent'
                  original='img/RAG-App-AI-Agent.jpg'
                  thumbnail='img/RAG-App-AI-Agent.jpg'
                  width='1960'
                  height='944'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/RAG-App-AI-Agent.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Personal Finance AI Agent'
                  original='img/Personal-Finance-Data-AI-Agent.jpg'
                  thumbnail='img/Personal-Finance-Data-AI-Agent.jpg'
                  width='1616'
                  height='995'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Personal-Finance-Data-AI-Agent.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='Stock Analyzer AI Agent'
                  original='img/Stock-Analyzer-AI-Agent.jpg'
                  thumbnail='img/Stock-Analyzer-AI-Agent.jpg'
                  width='1292'
                  height='959'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Stock-Analyzer-AI-Agent.jpg'
                    />
                  )}
                </Item>
                <Item
                  caption='AI Agent Usage and Cost Tracking'
                  original='img/AI-Agent-Usage-Cost-Tracking.jpg'
                  thumbnail='img/AI-Agent-Usage-Cost-Tracking.jpg'
                  width='971'
                  height='787'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/AI-Agent-Usage-Cost-Tracking.jpg'
                    />
                  )}
                </Item>
              </Gallery>
              <div className='card-body'>
                <h5 className='card-title'>AI Agents</h5>
                <p>
                  Uses OpenAIs GPT LLM to create blog posts, write scripts for
                  YouTube videos, titles for social media posts, research Web
                  about a lead, writes emails, load documents into a vector
                  databases to use for providing detailed knowledge, analyze
                  finances & stocks, visualize data, etc.
                </p>
              </div>
            </div>
          </div>
          <div className='subheading mb-2'>Modern Web Apps</div>
          <p>
            Using Next.js, NextAuth.js, Auth0, React, TypeScript, OpenAI API,
            Stripe, PayPal, PostgreSQL with Prisma, and MongoDB with Mongoose to
            build real-world ecommerce websites, rental property sites, and SaaS
            platforms for AI solutions.
          </p>
          <p className='lead'>Tech stack:</p>
          <ul className='list-inline dev-icons'>
            <li className='list-inline-item'>
              <svg
                className='svg-inline--fa fa-js fa-w-14'
                height='42'
                viewBox='0 0 32 32'
                width='48'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m23.749 30.005c-.119.063-.109.083.005.025.037-.015.068-.036.095-.061 0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016.036-.021.068-.041.068-.047 0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016.037-.021.068-.043.068-.048 0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zm-9.563-29.536c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208-.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792-.057.125-.151.229-.276.287-.099.047-.188.057-.661.057h-.541l-.141-.088c-.088-.057-.161-.136-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125c.063-.077.141-.14.229-.187.131-.063.183-.073.724-.073.635 0 .74.025.907.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083c1.219-.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328-.871-6.011-5.147-11.057-10.943-12.928-1.084-.343-2.199-.577-3.328-.697-.303-.031-2.371-.068-2.631-.041zm6.547 9.677c.151.072.265.208.317.364.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204.047-.167.161-.307.313-.395.124-.063.172-.068.667-.068.463 0 .541.005.645.063z' />
              </svg>
            </li>
            <li className='list-inline-item'>
              <svg
                className='svg-inline--fa fa-js fa-w-14'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.71875 3.92972C5.62789 3.36733 8.45568 2.52411 9.64828 2.16812C10.0173 2.05797 10.4075 2.05711 10.7771 2.16533C11.926 2.50173 14.5984 3.28783 16.6648 3.92349C17.0828 4.05209 17.3679 4.44593 17.3575 4.88319C17.1188 14.9867 12.0196 17.4105 10.5842 17.8936C10.3388 17.9762 10.0837 17.9764 9.83802 17.8945C8.39567 17.4137 3.25421 14.9951 3.00907 4.89714C2.9983 4.45317 3.29276 4.05521 3.71875 3.92972Z'
                  fill='#D9D9D9'
                />
                <mask
                  id='mask0_156_252'
                  maskUnits='userSpaceOnUse'
                  x='3'
                  y='2'
                  width='15'
                  height='16'
                >
                  <path
                    d='M3.71875 3.92972C5.62789 3.36733 8.45568 2.52411 9.64828 2.16812C10.0173 2.05797 10.4075 2.05711 10.7771 2.16533C11.926 2.50173 14.5984 3.28783 16.6648 3.92349C17.0828 4.05209 17.3679 4.44593 17.3575 4.88319C17.1188 14.9867 12.0196 17.4105 10.5842 17.8936C10.3388 17.9762 10.0837 17.9764 9.83802 17.8945C8.39567 17.4137 3.25421 14.9951 3.00907 4.89714C2.9983 4.45317 3.29276 4.05521 3.71875 3.92972Z'
                    fill='#D9D9D9'
                  />
                </mask>
                <g mask='url(#mask0_156_252)'>
                  <path
                    d='M10.2112 9.77465L10.0986 1.71831L17.8169 3.80282L10.2112 9.77465Z'
                    fill='url(#paint0_linear_156_252)'
                  />
                  <path
                    d='M10.2113 9.77465V2L2.83098 3.97183L1.81689 8.76056L5.02816 13.7746L10.2113 9.77465Z'
                    fill='url(#paint1_linear_156_252)'
                  />
                  <path
                    d='M17.5915 3.97183L4.91547 13.7746V18.2254H17.4225L17.5915 3.97183Z'
                    fill='url(#paint2_linear_156_252)'
                  />
                </g>
                <defs>
                  <linearGradient
                    id='paint0_linear_156_252'
                    x1='10.2112'
                    y1='2'
                    x2='15.6197'
                    y2='5.5493'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#19AAE8' />
                    <stop offset='1' stop-color='#1EA5F1' />
                  </linearGradient>
                  <linearGradient
                    id='paint1_linear_156_252'
                    x1='3.05633'
                    y1='4.14085'
                    x2='10.2113'
                    y2='9.66197'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#2BE2B8' />
                    <stop offset='1' stop-color='#19B9E3' />
                  </linearGradient>
                  <linearGradient
                    id='paint2_linear_156_252'
                    x1='17.3098'
                    y1='4.02817'
                    x2='7.95772'
                    y2='16.9859'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#925CDF' />
                    <stop offset='1' stop-color='#CC42E5' />
                  </linearGradient>
                </defs>
              </svg>
            </li>
            <li className='list-inline-item'>
              <svg
                className='svg-inline--fa fa-js fa-w-14'
                height='42'
                preserveAspectRatio='xMidYMid'
                viewBox='0 0 256 287'
                width='48'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='m203.240327 231.531381-28.731267-88.434327 75.209419-54.6405603h-92.966535l-28.732972-88.4309169-.008526-.02387168h92.980176l28.739793 88.44626298.001705-.0017051.023871-.013641c16.689712 51.310461-.4996 109.669888-46.515664 143.098759zm-150.4495304 0-.0238717.017051 75.2281751 54.654201 75.245227-54.669547-75.221355-54.655906zm-46.49690858-143.0970539c-17.56955322 54.0881019 2.82538331 111.4005839 46.48156248 143.1072849l.0068205-.027282 28.7346769-88.429212-75.19236773-54.6303294h92.94436873l28.7346771-88.43091692.00682-.02387168h-92.9852914z'
                  fill='#eb5424'
                />
              </svg>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-react' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-js' />
            </li>
            <li className='list-inline-item'>
              <svg
                className='svg-inline--fa fa-js fa-w-14'
                viewBox='0 0 128 128'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m22.67 47h99.67v73.67h-99.67z' fill='#fff' />
                <path
                  d='m1.5 63.91v62.5h125v-125h-125zm100.73-5a15.56 15.56 0 0 1 7.82 4.5 20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0 -5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1 -9.52-.1 23 23 0 0 1 -12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73l4.63-2.56 3.59-2.08.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1 -3.43-6.25 25 25 0 0 1 -.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12h-16.23v46.23h-11.51v-46.24h-16.27v-5a49.19 49.19 0 0 1 .12-5.17c.08-.09 10-.09 22-.09h21.83z'
                  fill='#007acc'
                />
              </svg>
            </li>
            <li className='list-inline-item'>
              <OpenAI className='svg-inline--fa fa-js fa-w-14' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-cc-stripe' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-cc-paypal' />
            </li>
            <li className='list-inline-item'>
              <svg
                className='svg-inline--fa fa-js fa-w-14'
                height='264'
                preserveAspectRatio='xMidYMid'
                viewBox='0 0 256 264'
                width='256'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m255.007926 158.085617c-1.534817-4.648204-5.555732-7.886338-10.756138-8.663797-2.451806-.365968-5.260121-.209885-8.5828.475344-5.79163 1.194864-10.088646 1.649515-13.224498 1.738199 11.836304-19.985146 21.461431-42.775649 27.002383-64.2288041 8.959409-34.6882956 4.171677-50.4911224-1.423076-57.639612-14.806615-18.9191686-36.409349-29.08349193-62.472277-29.39506699-13.902042-.1696813-26.107862 2.57537182-32.474162 4.5488776-5.928203-1.04528407-12.302781-1.6294134-18.991298-1.73760739-12.535723-.19983372-23.612896 2.53280369-33.077801 8.14943188-5.2412013-1.77130717-13.6501805-4.26922865-23.3622174-5.86375983-22.8425312-3.75013395-41.2520647-.82771362-54.7177829 8.68508083-16.30595847 11.5182263-23.86534877 31.5299769-22.46710397 59.4800924.44341802 8.8742725 5.4079261 35.8736996 13.22390767 61.4802036 4.49212 14.717339 9.282217 26.939713 14.2372655 36.329533 7.0266975 13.314956 14.5452933 21.15636 22.9861987 23.971769 4.7315658 1.576795 13.3273718 2.680019 22.3689607-4.848628 1.1457921 1.387012 2.6741062 2.766337 4.7037783 4.046928 2.5765543 1.625275 5.7277783 2.953164 8.8742725 3.740084 11.3414504 2.83551 21.9645639 2.126041 31.0274369-1.847576.055575 1.611677.098734 3.151816.13539 4.481479.060305 2.157376.119427 4.272184.198651 6.249829.536832 13.374669 1.446725 23.773709 4.142707 31.049311.147806.40085.347048 1.010402.557524 1.65661 1.344444 4.118467 3.594051 11.012139 9.315326 16.411788 5.925838 5.592388 13.092656 7.30812 19.656425 7.307529 3.291935 0 6.433108-.431594 9.187621-1.022227 9.820822-2.104166 20.973672-5.310965 29.041515-16.798448 7.627381-10.860194 11.335538-27.216998 12.006577-52.990817.08691-.728388.167317-1.424259.244767-2.087612.052028-.447557.105238-.905164.159039-1.361589l1.797321.157856.462929.031335c10.002328.455834 22.232388-1.665478 29.743298-5.154291 5.935298-2.754512 24.953792-12.794679 20.475861-26.351445' />
                <path
                  d='m237.905589 160.722476c-29.739751 6.13454-31.784203-3.934596-31.784203-3.934596 31.400499-46.593183 44.526854-105.7362772 33.199002-120.2112149-30.903279-39.48489605-84.398411-20.8110854-85.291159-20.3262817l-.287335.0514365c-5.875585-1.2196952-12.451178-1.9463095-19.841478-2.0669192-13.45685-.2205266-23.664333 3.5278337-31.409959 9.4016443 0 0-95.43005977-39.3134411-90.9917411 49.4440647.9441848 18.8825127 27.0638707 142.8734223 58.2184204 105.4223373 11.3869746-13.694522 22.3890623-25.273644 22.3890623-25.273644 5.4646836 3.630115 12.0065774 5.481829 18.8647764 4.816702l.532692-.452287c-.165542 1.700361-.089866 3.363474.213432 5.33225-8.025866 8.967094-5.667473 10.541524-21.7115193 13.844101-16.2344203 3.345737-6.6973857 9.302319-.4706143 10.859012 7.5487482 1.887778 25.0129146 4.561884 36.8131546-11.956915l-.470614 1.884822c3.14472 2.518615 5.352942 16.383409 4.982836 28.951649-.370106 12.568832-.617238 21.197746 1.860582 27.9377s4.947362 21.90485 26.038688 17.385534c17.623797-3.776739 26.756434-13.563862 28.026975-29.889331.901616-11.606318 2.94193-9.890586 3.070817-20.267159l1.636508-4.91248c1.887187-15.733063.299751-20.808721 11.15758-18.447963l2.638633.231759c7.991575.363603 18.450919-1.285321 24.589598-4.138568 13.218586-6.13454 21.058217-16.376905 8.024683-13.685653z'
                  fill='#336791'
                />
                <g fill='#fff'>
                  <path d='m108.076342 81.5250624c-2.679427-.3730624-5.106993-.0277876-6.334966.9016166-.69114.5232332-.904572 1.1292379-.961921 1.546642-.15431 1.1049977.620194 2.3264665 1.095538 2.9567113 1.345626 1.7837229 3.312037 3.0099215 5.258346 3.2801109.282014.0390208.562255.0579399.841312.0579399 3.24582 0 6.196028-2.5268914 6.456167-4.3922032.325173-2.3359261-3.066088-3.8932102-6.354476-4.3508175' />
                  <path d='m196.860453 81.5989654h-.000592c-.255408-1.8310208-3.514235-2.3530716-6.606337-1.9232518-3.087372.4304111-6.081921 1.8239261-5.831833 3.6590855.201016 1.4272148 2.776979 3.8636489 5.827695 3.8630577.257182 0 .517321-.0171455.779233-.0538014 2.036175-.2820138 3.530199-1.5750208 4.239667-2.3205542 1.081349-1.1351502 1.706273-2.401552 1.592167-3.2245358' />
                  <path d='m247.802088 160.025423c-1.133968-3.4291-4.783594-4.532915-10.847779-3.280111-18.005136 3.715843-24.453025 1.141653-26.570789-.417404 13.995455-21.320721 25.50836-47.091585 31.719168-71.1372567 2.942522-11.3899307 4.567797-21.9675197 4.700231-30.5887483.146624-9.4643141-1.464462-16.4176998-4.788914-20.6656443-13.402458-17.125395-33.07189-26.31124253-56.882254-26.56369519-16.368629-.18387067-30.198541 4.00554269-32.879742 5.18326099-5.646189-1.4041571-11.801422-2.2661617-18.501764-2.3761293-12.288591-.19865132-22.909931 2.7432794-31.704388 8.7394734-3.8198986-1.4213025-13.6921572-4.8101986-25.7643605-6.7547344-20.8725727-3.36110856-37.4581801-.8147067-49.294485 7.5706235-14.1231593 10.0058753-20.64317778 27.8915843-19.37973205 53.1593164.42509007 8.5018014 5.26839725 34.6534139 12.91292375 59.6988449 10.0620416 32.963696 20.9990947 51.62509 32.5078615 55.463317 1.3468083.44933 2.900545.763861 4.6127298.763861 4.1982817 0 9.3448868-1.892508 14.700194-8.330346 8.8949653-10.701155 17.1998891-19.66825 20.2612471-22.926485 4.5240462 2.428748 9.4932844 3.784425 14.5772194 3.920406.008868.133026.022466.266051.034291.398485-1.019861 1.209645-1.856443 2.269709-2.56946 3.174873-3.521921 4.470836-4.255039 5.401423-15.5923507 7.736167-3.2245358.665127-11.7907806 2.430521-11.9155288 8.434401-.1365728 6.559631 10.1241201 9.314735 11.2935612 9.606799 4.0741247 1.019862 7.9986697 1.522994 11.7417093 1.522994 9.103667-.000592 17.114161-2.992185 23.516526-8.78086-.197469 23.385866.778051 46.430005 3.585774 53.451381 2.29927 5.747289 7.917672 19.794772 25.664443 19.793589 2.60316 0 5.470005-.302706 8.623003-.978475 18.520683-3.971252 26.563104-12.156749 29.674716-30.203271 1.664886-9.644637 4.522272-32.67636 5.865533-45.029986 2.836102.884471 6.487501 1.28946 10.434513 1.288869 8.232203 0 17.730808-1.748841 23.687981-4.513996 6.691474-3.107473 18.767816-10.734263 16.577922-17.359519zm-44.105903-83.4808318c-.061488 3.647261-.563437 6.9581155-1.095538 10.4144111-.572305 3.7170254-1.164712 7.5599815-1.3137 12.2253303-.147215 4.5400094.419769 9.2603414.968425 13.8245914 1.107954 9.219547 2.244877 18.711649-2.156785 28.07782-.684047-1.214966-1.344444-2.54049-1.949857-4.008499-.546882-1.326116-1.734651-3.456296-3.378845-6.40473-6.399409-11.475658-21.384573-38.3491547-13.713442-49.3151778 2.28449-3.264739 8.083215-6.6199354 22.639742-4.813746zm-17.643899-61.7864573c21.333728.4712056 38.209035 8.4521386 50.157672 23.7199077 9.163973 11.7109653-.927039 64.9979864-30.140009 110.9686094-.288517-.366559-.582355-.736665-.886245-1.116231-.121201-.151944-.244766-.306254-.369515-.462337 7.548749-12.467141 6.072462-24.801847 4.758763-35.738309-.539788-4.487982-1.049423-8.727058-.919945-12.7083606.134208-4.2213395.692323-7.8402217 1.23152-11.3402679.663944-4.3135704 1.338531-8.7761293 1.152295-14.0374319.138938-.551612.195104-1.2037321.122384-1.9776443-.475345-5.0455058-6.235049-20.1435935-17.975576-33.8109192-6.421284-7.474254-15.786863-15.8394827-28.573856-21.4815335 5.500157-1.1398799 13.021709-2.2029007 21.442512-2.0154827zm-119.3781798 161.0198611c-5.8998244 7.093506-9.9745404 5.734282-11.314254 5.287908-8.7306051-2.91237-18.8600462-21.36388-27.7910762-50.624148-7.7278892-25.317986-12.2442494-50.7766834-12.6013487-57.9157134-1.1286467-22.5776628 4.344314-38.3130901 16.2675288-46.768776 19.4039723-13.760739 51.3064203-5.5243972 64.1253395-1.3468083-.1844619.1815057-.3760185.3517783-.5587067.5362402-21.0351593 21.2444526-20.5361663 57.5408776-20.4847298 59.7591501-.0017736.8560924.0697645 2.0681016.1684989 3.7353533.3618291 6.104388 1.0352332 17.4665311-.7638615 30.3339311-1.6725727 11.956914 2.0131178 23.660194 10.110522 32.108785.8383556.87442 1.7133672 1.69563 2.6173487 2.46836-3.6046928 3.860102-11.4378199 12.395603-19.775261 22.425718zm22.4789284-29.993385c-6.5265219-6.809127-9.4903279-16.281127-8.1328776-25.989026 1.900194-13.592831 1.1984111-25.4309096.8218014-31.7907064-.0526189-.8897921-.0993256-1.6696166-.1271131-2.2850808 3.0731824-2.7243603 17.3139953-10.3552887 27.4694507-8.028231 4.635196 1.0618384 7.458291 4.2172009 8.632462 9.6458199 6.0766 28.1026513.804655 39.8159813-3.431465 49.2282683-.873238 1.939214-1.697995 3.772009-2.402734 5.668655l-.5457 1.465645c-1.382282 3.706383-2.668194 7.152037-3.465164 10.424462-6.937422-.021284-13.6868359-2.984499-18.8186604-8.339806zm1.0647945 37.900415c-2.0255335-.506087-3.8476859-1.385237-4.9166189-2.114217.8927482-.42036 2.4819584-.991482 5.2376535-1.559057 13.3374223-2.746236 15.3966563-4.683677 19.8946883-10.394901 1.031686-1.30897 2.200536-2.793534 3.819307-4.601497.000591-.001182.001183-.001773.001774-.002365 2.411603-2.699528 3.514235-2.241921 5.514346-1.412434 1.621136.67104 3.199705 2.702485 3.84 4.938494.302707 1.055927.643252 3.060767-.470023 4.619825-9.396323 13.155917-23.087889 12.986827-32.9211269 10.526152zm69.7987249 64.952462c-16.316009 3.495908-22.092859-4.829117-25.89975-14.346051-2.457127-6.144591-3.664407-33.851122-2.807723-64.447556.011233-.407353-.046707-.800517-.159039-1.170032-.097552-.713608-.247723-1.435492-.455834-2.162107-1.274679-4.451917-4.379196-8.176037-8.103908-9.719723-1.479833-.613099-4.196508-1.738198-7.460656-.90339.696462-2.868028 1.903742-6.106161 3.21212-9.613302l.549248-1.475696c.61842-1.663113 1.393515-3.385939 2.214133-5.209274 4.432998-9.84861 10.504278-23.337386 3.915086-53.8108456-2.46836-11.4135797-10.710023-16.9870485-23.20436-15.6928591-7.4908086.7750947-14.343095 3.7974318-17.7609611 5.5303094-.7348914.3724712-1.4071131.7319354-2.034993 1.0825312.9536443-11.5004896 4.5583371-32.9920739 18.0406101-46.5896351 8.488203-8.5609238 19.793588-12.7887667 33.567926-12.5611455 27.140138.4446005 44.544 14.3726559 54.366004 25.9789746 8.463372 10.0017367 13.046541 20.076194 14.875788 25.5095427-13.754827-1.3982448-23.109765 1.3172472-27.852564 8.096813-10.316859 14.7474919 5.644416 43.3721944 13.315548 57.1287944 1.406522 2.52157 2.620896 4.700231 3.002826 5.626088 2.497922 6.054134 5.731917 10.095741 8.093266 13.04654.723658.903982 1.426032 1.780767 1.959908 2.546402-4.165765 1.201367-11.648887 3.975982-10.967206 17.846688-.549838 6.960481-4.461376 39.546384-6.447889 51.059289-2.62267 15.209829-8.219788 20.875529-23.95758 24.249644zm68.104277-77.936923c-4.259769 1.977644-11.388748 3.461025-18.161219 3.779103-7.480166.350596-11.287649-.837764-12.183353-1.568517-.420952-8.643695 2.79708-9.547085 6.20194-10.503095.535057-.150762 1.057108-.296794 1.560831-.472979.313349.254818.656259.507862 1.031686.755585 6.012157 3.968295 16.735778 4.396341 31.874069 1.271722.055575-.011824.11115-.022466.166134-.033699-2.041496 1.909062-5.53563 4.471427-10.490088 6.77188z' />
                </g>
              </svg>
            </li>
            <li className='list-inline-item'>
              <svg
                className='svg-inline--fa fa-js fa-w-14'
                height='310'
                preserveAspectRatio='xMidYMid'
                viewBox='0 0 256 310'
                width='256'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m254.312882 235.518775-106.311921-225.76890236c-2.691156-5.66052181-8.269037-9.38998809-14.528343-9.71389733-6.27371-.42034965-12.260564 2.68328308-15.532963 8.05241131l-115.30712935 186.75875638c-3.57965512 5.757105-3.50434054 13.065631.19319605 18.747745l56.374607 87.30143c4.3801722 6.730308 12.6658994 9.777317 20.3628635 7.488279l163.5984138-48.391746c4.983869-1.457149 9.091195-5.003488 11.259466-9.721626 2.138809-4.695415 2.102063-10.09431-.100462-14.760178zm-23.801753 9.682986-138.8229527 41.050297c-4.2348574 1.259638-8.2997023-2.411087-7.4187283-6.684584l49.59729-237.4843107c.927341-4.4435091 7.063247-5.1467427 9.002935-1.0355308l91.814491 194.9734525c.82154 1.758338.831447 3.788342.027108 5.554616-.804338 1.766273-2.342157 3.091462-4.207871 3.62606z' />
              </svg>
            </li>
            <li className='list-inline-item'>
              <svg
                className='svg-inline--fa fa-js fa-w-14'
                viewBox='0 0 128 128'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-rule='evenodd' fill-rule='evenodd'>
                  <path
                    d='m87.259 100.139c.169-.325.331-.612.469-.909.087-.19.221-.228.41-.223 1.133.032 2.266.067 3.4.078.963.01 1.928-.008 2.892-.019 1.086-.013 2.172-.07 3.257-.039 1.445.042 2.853.325 4.16.968 1.561.769 2.742 1.94 3.547 3.483.514.985.812 2.03.931 3.14.172 1.608.059 3.179-.451 4.717-.632 1.906-1.832 3.365-3.499 4.458-1.283.841-2.69 1.338-4.198 1.622-1.596.301-3.197.204-4.798.209-1.756.007-3.511-.031-5.267-.051-.307-.003-.351-.061-.27-.354l.075-.27c.171-.538.263-.562.809-.652.378-.061.77-.203 1.087-.413.184-.122.26-.44.332-.685.062-.214.065-.449.067-.675.025-3.425.051-6.849.065-10.272.003-.865-.017-1.732-.065-2.596-.034-.605-.357-1.019-1.077-1.162-.56-.111-1.124-.197-1.687-.296zm16.076 8.293c-.076-.682-.113-1.37-.235-2.042-.292-1.613-.998-3.018-2.238-4.119-2.005-1.779-4.419-2.053-6.949-1.841-.576.048-.7.245-.709.837-.014.84-.028 1.68-.029 2.52-.004 2.664-.004 5.328 0 7.992.001.758.009 1.516.031 2.272.024.774.305 1.429 1.063 1.729 1.195.473 2.452.529 3.706.336 2.003-.307 3.404-1.474 4.344-3.223.744-1.388.954-2.903 1.016-4.461zm4.869 9.071c-.024-.415.146-.758.356-1.073.057-.085.253-.081.388-.108l1.146-.227c.405-.086.618-.358.675-.755.038-.262.074-.527.077-.792.025-2.097.049-4.194.059-6.291.01-2.1.002-4.2.002-6.3l-.009-.401c-.041-.675-.367-1.025-1.037-1.124l-1.453-.221c-.179-.024-.244-.11-.179-.269.112-.271.219-.552.377-.796.059-.09.258-.125.392-.122.694.01 1.388.062 2.082.061l6.041-.036c1.164-.001 2.288.202 3.332.759 1.149.612 1.792 1.559 1.976 2.849.192 1.355-.219 2.497-1.209 3.404-.407.374-.934.618-1.406.922l-.154.096c.438.161.855.3 1.261.466 1.188.487 2.133 1.248 2.633 2.463.395.959.395 1.959.161 2.953-.364 1.556-1.389 2.591-2.722 3.374-1.251.735-2.605 1.163-4.047 1.235-1.33.067-2.666.042-3.999.057l-.772.004c-1.284-.029-2.569-.062-3.854-.096zm5.537-6.089h.013c0 .658-.009 1.316.003 1.974.008.426-.007.864.085 1.274.138.613.418 1.166 1.106 1.342.929.239 1.878.287 2.818.124 1.177-.205 2.116-.795 2.631-1.916.382-.833.439-1.716.308-2.618-.174-1.188-.805-2.05-1.854-2.615-.688-.371-1.422-.598-2.204-.628-.876-.033-1.753-.035-2.629-.062-.246-.007-.28.118-.279.32.005.934.002 1.869.002 2.805zm1.865-4.475c.479-.024 1.021-.031 1.56-.085 1.032-.103 1.759-.622 2.138-1.609.193-.501.185-1.017.19-1.538.015-1.357-.777-2.469-2.066-2.929-.995-.355-2.021-.361-3.053-.333-.418.011-.605.194-.611.615l-.062 5.489c-.003.218.091.312.303.319z'
                    fill='#94795d'
                  />
                  <path
                    d='m10.543 116.448-.073.944c-.68 0-1.307-.005-1.934.002-1.181.012-2.362.031-3.544.048l-.114.007c-.169-.02-.476-.02-.484-.07-.05-.281-.034-.576-.021-.867.001-.033.116-.075.183-.091l.919-.205c.573-.149.775-.396.802-.988.031-.667.062-1.335.065-2.002.009-1.642-.001-3.282.006-4.924.001-.384-.132-.67-.49-.826-.426-.188-.854-.372-1.285-.546-.204-.082-.469-.127-.445-.401.024-.279.281-.352.523-.407 1.002-.229 2.005-.452 3.004-.696.322-.079.63-.212 1.015-.346.02.208.057.406.053.604l-.059.941c-.001.106.054.248.133.307.048.037.209-.03.289-.092.854-.65 1.758-1.211 2.789-1.538 1.597-.507 2.968-.037 3.928 1.34.338.485.339.485.808.146.805-.585 1.647-1.101 2.589-1.441 2.068-.747 4.055.201 4.774 2.284.262.756.362 1.537.36 2.335l-.019 5.298c-.001.437.144.686.56.822.467.153.951.258 1.477.396l-.122.911c-.598 0-1.148-.004-1.698.001-1.344.012-2.688.019-4.031.05-.234.006-.295-.052-.307-.271-.039-.701-.045-.7.615-.858l.222-.057c.645-.176.86-.374.865-1.028.015-1.878.054-3.761-.041-5.635-.099-1.944-1.642-2.979-3.526-2.481-.615.162-1.172.446-1.69.814-.175.125-.208.269-.194.488.053.828.086 1.657.093 2.486.012 1.451-.006 2.902 0 4.354.002.588.203.813.784.949l.863.199.16.036c.012.276.023.552.01.828-.008.173-.142.188-.292.185-.839-.021-1.679-.049-2.518-.047-1.021.002-2.041.031-3.061.049h-.24c0-.293-.014-.573.01-.852.005-.067.123-.161.204-.182l1.006-.213c.427-.105.631-.324.655-.758.114-2.01.196-4.021.007-6.03-.037-.39-.164-.786-.326-1.145-.515-1.138-1.674-1.613-3.011-1.271-.635.162-1.208.453-1.75.82-.256.174-.378.404-.378.695 0 2.005.007 4.01.013 6.014l.011.773c.012.539.241.823.776.939.344.078.692.131 1.082.203z'
                    fill='#50382b'
                  />
                  <path
                    d='m71.001 105.285c.155.754.152 1.432-.402 1.946-.55.511-1.246.339-1.925.225.063.358.133.662.167.97.247 2.289-.738 3.988-2.861 4.959-.802.366-1.653.502-2.522.572-.432.034-.81.364-.851.719-.042.36.184.73.636.838.533.127 1.089.163 1.636.226 1.174.134 2.361.195 3.521.405 1.754.316 2.733 1.847 2.424 3.609-.275 1.568-1.183 2.709-2.449 3.584-2.133 1.478-4.473 1.91-6.965 1.156-1.425-.432-2.43-1.369-2.777-2.885-.174-.759.011-1.446.582-1.961.679-.61 1.418-1.154 2.129-1.73l.23-.231-.264-.185c-.725-.344-1.305-.815-1.53-1.633-.077-.277.003-.459.238-.601.4-.241.798-.486 1.193-.735.186-.116.37-.236.543-.37.236-.18.215-.314-.067-.418-.656-.242-1.239-.593-1.691-1.133-.755-.901-.969-1.974-.907-3.107.097-1.77 1.058-2.936 2.62-3.686 1.857-.891 3.72-.947 5.613-.135.7.3 1.438.364 2.189.312.561-.04 1.051-.252 1.49-.711zm-6.843 12.681c-1.394-.012-1.831.16-2.649.993-.916.934-.911 2.229.003 3.167.694.711 1.56 1.044 2.523 1.144 1.125.116 2.233.069 3.255-.494 1.09-.603 1.632-1.723 1.387-2.851-.203-.931-.889-1.357-1.724-1.602-.95-.278-1.932-.331-2.795-.357zm-2.738-8.908c.051.387.072.779.158 1.158.223.982.65 1.845 1.627 2.282 1.147.515 2.612.294 3.114-1.316.344-1.103.302-2.198-.113-3.274-.185-.48-.483-.886-.91-1.184-.996-.695-2.793-.787-3.525.749-.238.499-.331 1.03-.351 1.585z'
                    fill='#4f382b'
                  />
                  <path
                    d='m47.35 105.038c.037.171.111.365.113.56.003.371-.037.742-.058 1.113v.322l.314-.24c.86-.708 1.784-1.311 2.86-1.636 1.942-.585 3.882.478 4.515 2.456.24.752.335 1.525.344 2.311.02 1.746.032 3.492.05 5.238.006.627.078.739.671.92.336.103.683.175 1.03.229.191.03.273.105.263.292l.002.172c-.007.723-.057.756-.758.754-1.678-.003-3.355.007-5.033.021-.5.004-.501.019-.551-.475l-.01-.284c.031-.426.041-.422.46-.484.282-.042.562-.107.837-.179.283-.073.419-.282.457-.562.019-.142.044-.284.043-.426-.024-1.908.007-3.818-.097-5.723-.084-1.541-1.26-2.459-2.807-2.354-.759.053-1.445.306-2.071.743-.413.289-.496.706-.494 1.155.008 1.784.025 3.568.044 5.353.004.391.015.782.052 1.17.039.424.188.595.604.687.398.088.804.139 1.229.21l.036.328c.014.765-.066.822-.809.819-1.735-.007-3.47.004-5.204.023-.273.004-.389-.082-.382-.348l-.004-.114c-.045-.689-.025-.715.627-.827l.308-.062c.706-.159.887-.347.897-1.064.033-2.271.045-4.541.068-6.812.003-.326-.12-.579-.424-.714-.426-.188-.856-.367-1.287-.544-.238-.098-.51-.16-.519-.489-.006-.232.242-.437.581-.506.681-.138 1.368-.253 2.041-.422.67-.167 1.328-.391 2.062-.611z'
                    fill='#4f372b'
                  />
                  <path
                    d='m84.865 110.97c-.032 2.121-.583 3.836-2.083 5.123-1.9 1.633-4.864 2.188-7.287.967-1.034-.521-1.794-1.32-2.289-2.357-.759-1.595-.949-3.272-.553-4.99.392-1.699 1.421-2.93 2.961-3.727 1.584-.819 3.252-1.139 5.011-.709 2.225.543 3.824 2.357 4.142 4.667.057.405.079.815.098 1.026zm-2.577 1.149-.086-.01c0-.2.011-.4-.002-.6-.073-1.246-.353-2.433-1.075-3.476-.685-.988-1.618-1.571-2.832-1.656-1.359-.096-2.501.664-2.902 2.052-.602 2.084-.398 4.115.66 6.024.461.832 1.144 1.446 2.059 1.769 1.793.631 3.383-.186 3.85-2.022.172-.678.222-1.387.328-2.081z'
                    fill='#4f382b'
                  />
                  <path
                    d='m40.819 111.134c-.037 1.522-.396 2.929-1.336 4.152-1.007 1.31-2.391 2.01-3.965 2.305-1.861.348-3.609.032-5.104-1.217-.71-.594-1.195-1.355-1.515-2.221-.525-1.42-.656-2.875-.333-4.358.345-1.587 1.241-2.8 2.63-3.614 1.606-.939 3.339-1.358 5.19-.936 2.38.544 3.754 2.095 4.262 4.443.102.474.116.964.171 1.446zm-2.606 1.004-.069-.01v-.286c-.039-1.396-.312-2.726-1.145-3.886-.617-.861-1.443-1.401-2.502-1.552-1.726-.246-2.854.778-3.228 2.169-.488 1.817-.335 3.612.42 5.335.471 1.074 1.215 1.911 2.358 2.317 1.782.633 3.396-.205 3.847-2.034.166-.669.216-1.367.319-2.053z'
                    fill='#4f372b'
                  />
                  <path
                    d='m82.362 33.544c1.227 3.547 2.109 7.168 2.4 10.92.36 4.656.196 9.28-.786 13.859l-.126.366c-.308.001-.622-.038-.923.009-2.543.4-5.083.814-7.624 1.226-2.627.426-5.256.835-7.878 1.289-.929.16-2.079-.031-2.454 1.253l-.18.061.127-7.678-.129-18.526 1.224-.21c2.001-.327 4.002-.66 6.006-.979 2.39-.379 4.782-.749 7.174-1.119 1.056-.162 2.113-.313 3.169-.471z'
                    fill='#439934'
                  />
                  <path
                    d='m62.265 84.911c-1.291-1.11-2.627-2.171-3.864-3.339-6.658-6.28-11.529-13.673-13.928-22.586-.661-2.452-1.101-4.945-1.243-7.479-.1-1.774-.243-3.563-.117-5.328.333-4.693 1.012-9.341 2.388-13.862l.076-.105c.134.178.326.336.394.537 1.344 3.956 2.677 7.916 4.004 11.879 4.169 12.451 8.333 24.905 12.509 37.354.082.243.293.442.445.661z'
                    fill='#45a538'
                  />
                  <path
                    d='m82.362 33.544c-1.057.157-2.114.309-3.169.471-2.392.37-4.784.74-7.174 1.119-2.003.318-4.004.651-6.006.979l-1.224.21-.01-.798c-.041-.656-.109-1.312-.118-1.968l-.137-12.554c-.032-2.619-.08-5.238-.133-7.856-.033-1.627-.068-3.255-.141-4.88-.04-.873-.181-1.742-.237-2.615-.033-.502.011-1.008.022-1.512.624 1.209 1.235 2.427 1.876 3.627 1.013 1.897 2.628 3.295 4.083 4.82 5.746 6.031 9.825 13.039 12.368 20.957z'
                    fill='#46a037'
                  />
                  <path
                    d='m64.792 62.527.18-.061c.375-1.284 1.525-1.093 2.454-1.253 2.622-.454 5.251-.863 7.878-1.289 2.541-.411 5.081-.825 7.624-1.226.301-.047.615-.008.923-.009-.475 1.696-.849 3.429-1.452 5.078-.685 1.87-1.513 3.696-2.392 5.486-1.314 2.675-2.951 5.171-4.853 7.458-1.466 1.762-3.1 3.393-4.737 5.002-.906.889-1.972 1.614-2.966 2.414l-.258-.176-.927-.792-.959-2.104c-.661-2.462-1.007-4.968-1.065-7.516l.018-.428.131-1.854c.043-.633.101-1.265.128-1.898.096-2.276.182-4.554.273-6.832z'
                    fill='#409433'
                  />
                  <path
                    d='m64.792 62.527c-.09 2.278-.176 4.557-.273 6.835-.027.634-.084 1.266-.128 1.898l-.584.221c-1.298-3.821-2.597-7.602-3.867-11.392-2.101-6.271-4.176-12.551-6.274-18.824-1.693-5.062-3.401-10.121-5.118-15.176-.081-.236-.311-.422-.471-.631l3.74-6.877c.129.223.298.432.379.672 1.73 5.12 3.457 10.241 5.169 15.367 2.228 6.67 4.441 13.343 6.667 20.014.089.266.235.512.375.811l.512-.596c-.043 2.56-.085 5.118-.127 7.678z'
                    fill='#4faa41'
                  />
                  <path
                    d='m48.076 25.458c.161.209.391.395.471.631 1.717 5.055 3.425 10.113 5.118 15.176 2.098 6.273 4.173 12.553 6.274 18.824 1.27 3.79 2.569 7.57 3.867 11.392l.584-.221-.131 1.854-.119.427c-.203 2.029-.374 4.062-.622 6.087-.124 1.015-.389 2.011-.59 3.015-.151-.219-.363-.418-.445-.661-4.177-12.449-8.34-24.903-12.509-37.354-1.327-3.963-2.661-7.923-4.004-11.879-.068-.201-.26-.359-.394-.537z'
                    fill='#4aa73c'
                  />
                  <path
                    d='m64.918 54.849-.512.596c-.14-.299-.286-.545-.375-.811-2.226-6.671-4.439-13.344-6.667-20.014-1.712-5.126-3.439-10.247-5.169-15.367-.081-.24-.25-.449-.379-.672l4.625-6.084c.146.194.354.367.429.586 1.284 3.76 2.556 7.523 3.822 11.289 1.182 3.518 2.346 7.04 3.542 10.552.08.235.359.401.545.601l.01.798z'
                    fill='#57ae47'
                  />
                  <path
                    d='m64.779 35.525c-.187-.199-.465-.365-.545-.601-1.195-3.512-2.36-7.034-3.542-10.552-1.266-3.766-2.538-7.529-3.822-11.289-.075-.219-.283-.392-.429-.586 1.504-1.473 2.961-2.999 4.526-4.404 1.391-1.248 2.509-2.586 2.561-4.559l.11-.393.396.998c-.01.504-.055 1.01-.022 1.512.057.873.198 1.742.237 2.615.073 1.625.108 3.253.141 4.88.053 2.618.101 5.237.133 7.856l.137 12.554c.01.657.079 1.313.119 1.969z'
                    fill='#60b24f'
                  />
                  <path
                    d='m62.929 82.642c.201-1.004.466-2 .59-3.015.248-2.024.419-4.058.622-6.087l.051-.008.05.009c.058 2.548.404 5.054 1.065 7.516-.135.178-.324.335-.396.535-.555 1.566-1.079 3.145-1.637 4.71-.076.214-.29.381-.439.568l-.571-1.96z'
                    fill='#a9aa88'
                  />
                  <path
                    d='m62.835 86.871c.149-.188.363-.354.439-.568.558-1.565 1.082-3.144 1.637-4.71.071-.2.261-.357.396-.535l.959 2.104c-.189.268-.451.511-.556.81l-1.836 5.392c-.076.217-.333.369-.507.552z'
                    fill='#b6b598'
                  />
                  <path
                    d='m63.367 89.915c.173-.183.431-.335.507-.552l1.836-5.392c.104-.299.367-.542.556-.81l.928.791c-.448.443-.697.955-.547 1.602l-.282.923c-.128.158-.314.296-.377.477-.641 1.836-1.252 3.682-1.898 5.517-.082.232-.309.415-.468.621z'
                    fill='#c2c1a7'
                  />
                  <path
                    d='m63.621 93.091c.16-.206.387-.389.468-.621.646-1.835 1.258-3.681 1.898-5.517.063-.181.249-.318.377-.477l-.389 4.236c-.104.12-.254.225-.304.364l-1.294 3.708c-.091.253-.265.479-.401.716-.121-.158-.337-.311-.347-.475-.038-.642-.011-1.289-.008-1.934z'
                    fill='#cecdb7'
                  />
                  <path
                    d='m63.977 95.501c.136-.237.31-.463.401-.716l1.294-3.708c.05-.14.201-.244.304-.364l.01 2.78-.931 2.387z'
                    fill='#dbdac7'
                  />
                  <path d='m65.055 95.88.931-2.387.192 2.824z' fill='#ebe9dc' />
                  <path
                    d='m66.646 85.554c-.149-.646.099-1.158.547-1.602l.258.176z'
                    fill='#cecdb7'
                  />
                  <path
                    d='m64.242 73.542-.05-.009-.051.008.119-.427z'
                    fill='#4faa41'
                  />
                </g>
              </svg>
            </li>
          </ul>
          <div className='d-flex row  mb-5'>
            <div
              className='card col-md-3 col-12 mx-2 mb-1'
              style={{ width: '14rem' }}
            >
              <Gallery>
                <Item
                  original='img/PropertyPulse-NextJS-MongoDB.jpg'
                  thumbnail='img/PropertyPulse-NextJS-MongoDB.jpg'
                  width='1920'
                  height='1080'
                  alt='Next.js Ecommerce'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/PropertyPulse-NextJS-MongoDB.jpg'
                      alt='Next.js Ecommerce'
                    />
                  )}
                </Item>
              </Gallery>
              <div className='card-body'>
                <h5 className='card-title'>PropertyPulse</h5>
                <p>
                  A web application to help you find your next rental property
                  with user authentication using Google & Next Auth, Photoswipe
                  image gallery, Mapbox maps, & responsive design using
                  Tailwind.
                </p>
                <a
                  href='https://github.com/jstoops/next-property'
                  target='_blank'
                  className='btn btn-primary'
                >
                  Github
                </a>
                <a
                  href='https://next-property-weld.vercel.app/'
                  target='_blank'
                  className='btn btn-secondary'
                >
                  Demo
                </a>
              </div>
            </div>
            <div
              className='card col-md-3 col-12 mx-2 mb-1'
              style={{ width: '14rem' }}
            >
              <Gallery>
                <Item
                  original='img/Prostore-NextJS-Postgres-Ecom.png'
                  thumbnail='img/Prostore-NextJS-Postgres-Ecom.png'
                  width='1920'
                  height='1080'
                  alt='Next.js Ecommerce'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Prostore-NextJS-Postgres-Ecom.png'
                      alt='Next.js Ecommerce'
                    />
                  )}
                </Item>
              </Gallery>
              <div className='card-body'>
                <h5 className='card-title'>Prostore</h5>
                <p>
                  A modern ecommerce platform built with Next.js, Next Auth,
                  PostgreSQL, Prisma ORM, TypeScript, Zod, ShadCN UI, React Hook
                  Form and tested with Jest.
                </p>
                <a
                  href='https://github.com/jstoops/prostore'
                  target='_blank'
                  className='btn btn-primary'
                >
                  Github
                </a>
                <a
                  href='https://prostore-three-steel.vercel.app/'
                  target='_blank'
                  className='btn btn-secondary'
                >
                  Demo
                </a>
              </div>
            </div>
            <div
              className='card col-md-3 col-12 mx-2 mb-1'
              style={{ width: '14rem' }}
            >
              <Gallery>
                <Item
                  original='img/Proshop-MERN-Redux-Ecom.png'
                  thumbnail='img/Proshop-MERN-Redux-Ecom.png'
                  width='1980'
                  height='1080'
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src='img/Proshop-MERN-Redux-Ecom.png'
                    />
                  )}
                </Item>
              </Gallery>
              <div className='card-body'>
                <h5 className='card-title'>Proshop</h5>
                <p>
                  Ecommerce platform built using MERN & Redux with secure login
                  using JWT, bcrypt & HTTP-Only cookie, scripts for seeding
                  MongoDB & PayPal API.
                </p>
                <a
                  href='https://github.com/jstoops/proshop'
                  target='_blank'
                  className='btn btn-primary'
                >
                  Github
                </a>
                <a
                  href='https://shop.jdscraft.com/'
                  target='_blank'
                  className='btn btn-secondary'
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className='m-0' />
    </div>
  );
}

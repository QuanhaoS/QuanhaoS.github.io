---
layout: homepage
---

## About Me

I am a Ph.D. student in Biomedical Engineering at the University of Southern California,
advised by [Hosung Kim](https://profiles.sc-ctsi.org/hosung.kim) and
[Michael C.K. Khoo](https://viterbi.usc.edu/directory/faculty/Khoo/Michael). I am a member
of the [NeuroImaging with Deep Learning Lab (NIDLL)](https://sites.google.com/usc.edu/nidll/home),
part of the [Laboratory of NeuroImaging (LONI)](https://loni.usc.edu/) at the USC Mark and Mary
Stevens Neuroimaging and Informatics Institute.

My research is on generative AI for learning meaningful medical imaging representations
under limited ground truth — in particular, generative and diffusion-based models for
image reconstruction, motion correction, and cross-modality synthesis in brain MRI.

## Research Interests

- **Medical Image Reconstruction:** accelerated MRI reconstruction, diffusion-based priors
- **Motion Correction:** retrospective and prospective correction for brain MRI
- **Cross-Modality Synthesis:** translation between MRI contrasts and modalities

## Projects

One line each; the [CV](assets/files/Quanhao-Sun-CV.pdf) carries the full technical
detail.

- **Generative Synthesis of Black-Blood MRI from T2-FLAIR** — Contrast-free
  quantification of the parasagittal dural space, via a two-stage 3D VQGAN with a
  modality-conditional MaskGIT decoder.
- **Motion-Adaptive Diffusion Model (MADM)** — 3D MRI motion correction in a VQGAN
  latent space, using an age-conditioned, attention-enhanced U-Net denoiser;
  validated on adult and neonatal cohorts.
- **Arc Segmentation for Infant Brain Development** — Clinician-in-the-loop 3D
  nnU-Net pipeline for a developmental biomarker in fetal and infant T2 MRI.
- **Regional Brain Age Prediction with Graph Convolutional Networks** —
  Laplacian-depth white-matter surface reconstruction feeding a GCN over cortical
  and depth-stratified white-matter features.
- **Accelerated MRI Reconstruction from Undersampled K-space** — Cascaded
  multi-scale wavelet network with iterative refinement, benchmarked against
  variational networks and compressed sensing.
- **Multi-modal Physiological Signal Analysis Software** — Desktop and CLI tool for
  EDF recordings with filtering, CWT/STFT visualization, and batch export.
- **Brain Tumor Segmentation from Multi-Contrast MRI** — FuseNet across T1, T2, DWI
  and FLAIR, with a step identifying the major contributing modalities.
- **Neural Functional Connectivity Brain Atlas** — Cortex–thalamus connectivity
  atlas with 3D visualization and hierarchical clustering of brain regions.
- **Thyroid Nodule Segmentation in Ultrasound** — Dual-pathway high-resolution
  encoder–decoder with a convolutional block attention module.
- **Vaa3D Neuron Image Enhancement Plugins** — Plugins for gigabyte-scale neuron
  visualization and VR-assisted observation.
- **Mesoporous Prussian Blue Nanoparticles for AML** — Zwitterion- and
  CXCR4-antagonist-functionalized nanoparticles for targeted chemo-photothermal
  treatment.

## Education

- **Ph.D. in Biomedical Engineering**, University of Southern California, 2022 – 2027 (expected)
- **B.E. in Biomedical Engineering**, Southeast University, 2018 – 2022

## Experience

- **Graduate Research Assistant**, Laboratory of NeuroImaging (LONI), University of
  Southern California — Sep 2023 – Present
- **Teaching Assistant**, University of Southern California — Aug 2023 – Nov 2024
  - BME 515: Data Analytics in Biomedical Engineering (Spring 2024)
  - BME 427: Basics of Biomedical Imaging — Non-Ionizing Radiation
  - MATH 118: Fundamental Principles of Calculus (Fall 2023)
- **Graduate Research Assistant**, [Fan MR Imaging Research Lab](https://sites.usc.edu/fan-mri-lab/),
  University of Southern California — Aug 2022 – Aug 2023. Supervised by
  [Zhaoyang Fan](https://viterbi.usc.edu/directory/faculty/Fan/Zhaoyang).
- **Undergraduate Research Assistant**, Southeast University, Nanjing, China —
  Sep 2018 – Jun 2022. Supervised by Peng Xie, Yu Sun, Zongcai Ruan, and Yu Zhang.

## Awards

- Meritorious Winner, Mathematical Contest in Modeling (MCM), 2021
- First Prize, Contemporary Undergraduate Mathematical Contest in Modeling (CUMCM), 2020
- Third Prize, National Biomedical Engineering Innovation Design Competition, 2020


{% include_relative _includes/publications.md %}

<!--
Services is still off — an empty Services list is worse than no section. To turn
it on, fill in _includes/services.md and add an include_relative tag for it here.
A News section can go above Publications once there are real items to list.

Written as prose rather than a commented-out tag because Liquid tags execute
even inside HTML comments.
-->

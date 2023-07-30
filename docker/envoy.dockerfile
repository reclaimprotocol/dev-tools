FROM envoyproxy/envoy:v1.20.1
COPY ./envoy/envoy.yaml /etc/envoy/envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml
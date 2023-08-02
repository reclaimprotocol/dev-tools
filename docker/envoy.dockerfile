FROM envoyproxy/envoy:v1.24-latest
COPY ./envoy/envoy.yaml /etc/envoy/envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml
CMD ["/usr/local/bin/envoy", "-c", "/etc/envoy/envoy.yaml"]